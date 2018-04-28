const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const moment = require('moment');
const { parseTime, prettyTime } = require('./time');

const DB_PATH = process.env.DB_PATH || './hours.json';

/**
 * Initializes the database adapters and returns the store commands.
 * @returns {Store} Initialized store functions.
 */
const init = () => {
  const adapter = new FileSync(DB_PATH);
  const db = low(adapter);
  db.defaults({ hours: [] }).write();

  const hours = db.get('hours');

  /**
   * Returns a function that receives a time and clocks in or out depending on
   * the provided action and returns the inserted database record.
   * @param {string} action - The punch action for the clock function.
   * @returns {function(string): Object} A function for punching the clock.
   * Returns the updated hours collection instance.
   */
  const punch = (action) => (time) => {
    if (time === 'now') time = moment();

    const record = hours
          .push({ action, time: prettyTime(time, parseTime) })
          .write();

    return record;
  };

  return {
    hours,
    punch,
  };
};

module.exports = init();
