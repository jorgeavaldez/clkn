#!/usr/bin/env node

// load env file
require('dotenv').config();

const program = require('commander');
const lib = require('../lib');
const { clockOut } = lib.store();
const { prettyTime, parseRecordTime } = lib.time;

program
  .version('0.1.0')
  .command('out [when]')
  .action((when) => {
    const record = clockOut(when);
    console.log(`clocked out @ ${prettyTime(record.time, parseRecordTime)}`);
  })
  .parse(process.argv);
