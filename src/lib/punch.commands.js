const moment = require('moment');

const { punch } = require('./store');
const { prettyTime } = require('./time');

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
      const hours = punch(action)(when);
      const record = hours[hours.length - 1];

      console.log(`clocked ${action} @ ${record.time}`);
    }
  };
};

module.exports = {
  createPunchCommand
};
