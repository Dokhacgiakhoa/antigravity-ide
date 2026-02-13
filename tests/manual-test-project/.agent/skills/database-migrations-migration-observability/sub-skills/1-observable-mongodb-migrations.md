# 1. Observable MongoDB Migrations

```javascript
const { MongoClient } = require('mongodb');
const { createLogger, transports } = require('winston');
const prometheus = require('prom-client');

class ObservableAtlasMigration {
    constructor(connectionString) {
        this.client = new MongoClient(connectionString);
        this.logger = createLogger({
            transports: [
                new transports.File({ filename: 'migrations.log' }),
                new transports.Console()
            ]
        });
        this.metrics = this.setupMetrics();
    }

    setupMetrics() {
        const register = new prometheus.Registry();

        return {
            migrationDuration: new prometheus.Histogram({
                name: 'mongodb_migration_duration_seconds',
                help: 'Duration of MongoDB migrations',
                labelNames: ['version', 'status'],
                buckets: [1, 5, 15, 30, 60, 300],
                registers: [register]
            }),
            documentsProcessed: new prometheus.Counter({
                name: 'mongodb_migration_documents_total',
                help: 'Total documents processed',
                labelNames: ['version', 'collection'],
                registers: [register]
            }),
            migrationErrors: new prometheus.Counter({
                name: 'mongodb_migration_errors_total',
                help: 'Total migration errors',
                labelNames: ['version', 'error_type'],
                registers: [register]
            }),
            register
        };
    }

    async migrate() {
        await this.client.connect();
        const db = this.client.db();

        for (const [version, migration] of this.migrations) {
            await this.executeMigrationWithObservability(db, version, migration);
        }
    }

    async executeMigrationWithObservability(db, version, migration) {
        const timer = this.metrics.migrationDuration.startTimer({ version });
        const session = this.client.startSession();

        try {
            this.logger.info(`Starting migration ${version}`);

            await session.withTransaction(async () => {
                await migration.up(db, session, (collection, count) => {
                    this.metrics.documentsProcessed.inc({
                        version,
                        collection
                    }, count);
                });
            });

            timer({ status: 'success' });
            this.logger.info(`Migration ${version} completed`);

        } catch (error) {
            this.metrics.migrationErrors.inc({
                version,
                error_type: error.name
            });
            timer({ status: 'failed' });
            throw error;
        } finally {
            await session.endSession();
        }
    }
}
```