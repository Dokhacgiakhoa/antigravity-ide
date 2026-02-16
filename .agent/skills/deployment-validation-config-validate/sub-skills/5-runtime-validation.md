# 5. Runtime Validation

```typescript
import { EventEmitter } from 'events';
import * as chokidar from 'chokidar';

export class RuntimeConfigValidator extends EventEmitter {
  private validator: ConfigValidator;
  private currentConfig: any;

  async initialize(configPath: string): Promise<void> {
    this.currentConfig = await this.loadAndValidate(configPath);
    this.watchConfig(configPath);
  }

  private async loadAndValidate(configPath: string): Promise<any> {
    const config = await this.loadConfig(configPath);

    const validationResult = this.validator.validate(
      config,
      this.detectEnvironment()
    );

    if (!validationResult.valid) {
      this.emit('validation:error', {
        path: configPath,
        errors: validationResult.errors
      });

      if (!this.isDevelopment()) {
        throw new Error('Configuration validation failed');
      }
    }

    return config;
  }

  private watchConfig(configPath: string): void {
    const watcher = chokidar.watch(configPath, {
      persistent: true,
      ignoreInitial: true
    });

    watcher.on('change', async () => {
      try {
        const newConfig = await this.loadAndValidate(configPath);

        if (JSON.stringify(newConfig) !== JSON.stringify(this.currentConfig)) {
          this.emit('config:changed', {
            oldConfig: this.currentConfig,
            newConfig
          });
          this.currentConfig = newConfig;
        }
      } catch (error) {
        this.emit('config:error', { error });
      }
    });
  }
}
```