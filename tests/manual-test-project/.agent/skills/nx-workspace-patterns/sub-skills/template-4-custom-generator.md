# Template 4: Custom Generator

```typescript
// tools/generators/feature-lib/index.ts
import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  readProjectConfiguration,
} from '@nx/devkit';
import { libraryGenerator } from '@nx/react';

interface FeatureLibraryGeneratorSchema {
  name: string;
  scope: string;
  directory?: string;
}

export default async function featureLibraryGenerator(
  tree: Tree,
  options: FeatureLibraryGeneratorSchema
) {
  const { name, scope, directory } = options;
  const projectDirectory = directory
    ? `${directory}/${name}`
    : `libs/${scope}/feature-${name}`;

  // Generate base library
  await libraryGenerator(tree, {
    name: `feature-${name}`,
    directory: projectDirectory,
    tags: `type:feature,scope:${scope}`,
    style: 'css',
    skipTsConfig: false,
    skipFormat: true,
    unitTestRunner: 'jest',
    linter: 'eslint',
  });

  // Add custom files
  const projectConfig = readProjectConfiguration(tree, `${scope}-feature-${name}`);
  const projectNames = names(name);

  generateFiles(
    tree,
    joinPathFragments(__dirname, 'files'),
    projectConfig.sourceRoot,
    {
      ...projectNames,
      scope,
      tmpl: '',
    }
  );

  await formatFiles(tree);
}
```