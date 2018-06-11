#!/usr/bin/env node
import commander from 'commander';
import pageLoad from '..';
import { version, description } from '../../package.json';

const program = commander;

program
  .version(`${version}`, '-v, --version')
  .arguments('<url>')
  .description(`${description}`)
  .option('-o, --output [type]', 'Output format')
  .action((url) => {
    console.log(pageLoad(url));
  });

program.parse(process.argv);
