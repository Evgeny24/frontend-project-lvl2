#!/usr/bin/env node

const program = require('commander');

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action(function(firstConfig, secondConfig) {
    if (firstConfig) {
      console.log(firstConfig);
    }
    if (secondConfig) {
      console.log(secondConfig);
    }
  });

program.parse(process.argv);

console.log('Hello world!');
