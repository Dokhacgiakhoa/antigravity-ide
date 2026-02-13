# Node.js CLI Stack

```javascript
// package.json
{
  "name": "my-tool",
  "version": "1.0.0",
  "bin": {
    "mytool": "./bin/cli.js"
  },
  "dependencies": {
    "commander": "^12.0.0",    // Argument parsing
    "chalk": "^5.3.0",          // Colors
    "ora": "^8.0.0",            // Spinners
    "inquirer": "^9.2.0",       // Interactive prompts
    "conf": "^12.0.0"           // Config storage
  }
}

// bin/cli.js
#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .name('mytool')
  .description('What it does in one line')
  .version('1.0.0');

program
  .command('do-thing')
  .description('Does the thing')
  .option('-v, --verbose', 'Verbose output')
  .action(async (options) => {
    // Your logic here
  });

program.parse();
```