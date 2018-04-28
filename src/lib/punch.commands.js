const moment = require('moment');

const lib = require('../lib');
const { punch } = lib.store();
const { prettyTime, parseRecordTime } = lib.time;

const createPunchCommand = (action) => {
  return {
    command: `${action} [when]`,
    describe: `clock ${action} at a given time`,
    builder: (yargs) => {
      return yargs.positional('when', {
        type: 'string',
        default: moment(),
        describe: `time at which to clock ${action}`
      })
    },
    handler: (argv) => {
      const { when } = argv;
      const record = punch(action)(when);
      console.log(`clocked ${action} @ ${prettyTime(record.time, parseRecordTime)}`);
    }
  };
};

module.exports = {
  createPunchCommand
};
