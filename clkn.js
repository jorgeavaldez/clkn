#! /usr/bin/env node

// load env file
require('dotenv').config();

const program = require('commander');
program
  .version('0.1.0')
  .command('in [when]', 'clock in at a given time', { isDefault: true})
  .command('out [when]', 'clock out at a given time')
  .parse(process.argv);
