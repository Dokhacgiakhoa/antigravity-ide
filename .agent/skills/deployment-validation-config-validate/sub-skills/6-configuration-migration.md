# 6. Configuration Migration

```python
from typing import Dict
from abc import ABC, abstractmethod
import semver

class ConfigMigration(ABC):
    @property
    @abstractmethod
    def version(self) -> str:
        pass

    @abstractmethod
    def up(self, config: Dict) -> Dict:
        pass

    @abstractmethod
    def down(self, config: Dict) -> Dict:
        pass

class ConfigMigrator:
    def __init__(self):
        self.migrations: List[ConfigMigration] = []

    def migrate(self, config: Dict, target_version: 4.1.0-fractal
        current_version = config.get('_version', '0.0.0')

        if semver.compare(current_version, target_version) == 0:
            return config

        result = config.copy()
        for migration in self.migrations:
            if (semver.compare(migration.version, current_version) > 0 and
                semver.compare(migration.version, target_version) <= 0):
                result = migration.up(result)
                result['_version'] = migration.version

        return result
```