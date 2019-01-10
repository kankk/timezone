const timezoneMap = require('./timezone-map.json');
const Printer = require('./printer');

module.exports = function () {
  for (let city of Object.values(timezoneMap)) {
    Printer.printZone(city);
  }
}