const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const moment = require('moment');
const { parseTime } = require('./time');

const DB_PATH = process.env.DB_PATH || './hours.json';

const init = () => {
  const adapter = new FileSync(DB_PATH);
  const db = low(adapter);
  db.defaults({ hours: [] }).write();

  const hours = db.get('hours');

  const punch = (action) => (time) => {
    if (!time || time === 'now') time = moment();

    return record = hours
          .push({ action, time: parseTime(time) })
          .write();
  };

  return {
    hours,
    punch,
  };
};

module.exports = init();
