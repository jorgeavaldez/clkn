const moment = require('moment');

const lib = require('../lib');
const { clockIn } = lib.store();
const { prettyTime, parseRecordTime } = lib.time;

module.exports = {
  command: 'in [when]',
  describe: 'clock in at a given time',
  builder: (yargs) => {
    return yargs.positional('when', {
      type: 'string',
      default: moment(),
      describe: 'time at which to clock in'
    })
  },
  handler: (argv) => {
    const { when } = argv;
    const record = clockIn(when);
    console.log(`clocked in @ ${prettyTime(record.time, parseRecordTime)}`);
  }
};
