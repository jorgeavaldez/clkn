#!/usr/bin/env node

const moment = require('moment');

// load env file
require('dotenv').config();

require('yargs')
  .version('v0.1.0')
  .usage('$0 <cmd> [args]')
  .command(require('./src/commands/in'))
  .help()
  .argv;
