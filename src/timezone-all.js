const timezoneMap = require('./timezone-map.json');
const Printer = require('./printer');

// console.log(new Date().getTimezoneOffset());
for (let city of Object.values(timezoneMap)) {
  // console.log(utils.formatTimestamp(utils.getTimestampByTimezone(city.timezone)));
}

module.exports = function () {
  for (let city of Object.values(timezoneMap)) {
    Printer.printZone(city);
  }
}