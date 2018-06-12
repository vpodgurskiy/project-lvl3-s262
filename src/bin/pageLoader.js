#!/usr/bin/env node
import commander from 'commander';
import pageLoad from '..';
import { version, description } from '../../package.json';

const program = commander;

program
  .version(`${version}`, '-v, --version')
  .arguments('<uri>')
  .description(`${description}`)
  .option('-o, --output [path]', 'output path')
  .action(uri => pageLoad(uri, commander.output));

program.parse(process.argv);
