#!/usr/bin/env node

// load env file
require('dotenv').config();

const program = require('commander');
const lib = require('../lib');
const { clockIn } = lib.store();
const { prettyTime, parseRecordTime } = lib.time;

program
  .version('0.1.0')
  .command('in [when]')
  .action((when) => {
    const record = clockIn(when);
    console.log(`clocked in @ ${prettyTime(record.time, parseRecordTime)}`);
  })
  .parse(process.argv);
