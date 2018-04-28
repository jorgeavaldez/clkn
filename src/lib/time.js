const moment = require('moment');

const parseTime = (time) => {
  return moment(time, 'hmma');
};

const parseRecordTime = (time) => {
  return moment(time);
};

const prettyTime = (time, parse) => {
  if (parse) return parse(time).format("h:mm a");
  else return time.format("h:mm a");
};

const timeDiff = (start, end) => {
  return parseTime(end).diff(parseTime(start), 'hours', true);
};

module.exports = {
  parseTime,
  prettyTime,
  parseRecordTime,
  timeDiff
};
