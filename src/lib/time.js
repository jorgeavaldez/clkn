const moment = require('moment');

/**
 * Parses user input time and returns a moment instance of the time.
 * @param {string} time - The time to parse.
 * @returns {Object} - The parsed time moment instance.
 */
const parseTime = (time) => {
  return moment(time, 'hmma');
};

/**
 * Parses and returns a moment instance of the given time. For use when reading
 * records from the database.
 * @param {string} time - A time string from the database.
 * @returns {Object} - The parsed time moment instance.
 */
const parseRecordTime = (time) => {
  return moment(time);
};

/**
 * Returns a time formatted with a standard formatting string.
 * @param {string} time - The time to format.
 * @param {function(string): Object} parse - An optional parsing function to be
 * used on the provided time. Must return a moment instance.
 * @returns {string} - The formatted version of the provided time.
 */
const prettyTime = (time, parse) => {
  if (parse) return parse(time).format("h:mm a");
  else return time.format("h:mm a");
};

/**
 * Returns a function that applies the provided parsing function on the input
 * times and calculates the difference.
 * @param {function(string): Object} parse - A parse function to construct
 * moment instances according with a parsing format.
 * @returns {function(string, string): number} - A function that accepts a start
 * and end time as strings and returns the difference.
 */
const timeDiff = (parse) => (start, end) => {
  return parseTime(end).diff(parseTime(start), 'hours', true);
};

module.exports = {
  parseTime,
  prettyTime,
  parseRecordTime,
  timeDiff
};
