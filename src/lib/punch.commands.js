const moment = require('moment');

const { punch } = require('./store');
const { prettyTime, parseRecordTime } = require('./time');

/**
 * Returns a yargs command object representative of different clock actions.
 * @param {string} action - The punch action to perform, must be one of 'in' or
 * 'out'
 * @returns {Object} The constructed yargs command object.
 */
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
