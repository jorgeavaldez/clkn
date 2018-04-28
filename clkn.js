#!/usr/bin/env node
// load env file
require('dotenv').config();

const moment = require('moment');
const { commands } = require('./src/lib');

require('yargs')
  .version('v0.1.0')
  .usage('$0 <cmd> [args]')
  .command(commands.punch('in'))
  .command(commands.punch('out'))
  .help()
  .argv;
