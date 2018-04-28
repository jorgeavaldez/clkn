#!/usr/bin/env node
// load env file
require('dotenv').config();

const moment = require('moment');
const { createPunchCommand } = require('./src/lib').commands.punch;

require('yargs')
  .version('v0.1.0')
  .usage('$0 <cmd> [args]')
  .command(createPunchCommand('in'))
  .command(createPunchCommand('out'))
  .demandCommand()
  .help()
  .wrap(72)
  .argv;
