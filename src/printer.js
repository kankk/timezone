const utils = require('./utils');

function printZone(zone) {
  const timeString = utils.formatTimestamp(utils.getTimestampByTimezone(zone.timezone));
  const name = zone['name'];
  const nameEN = zone['name-en'];
  console.log(`${name}(${nameEN}): ${timeString}`);
}

module.exports = {
  printZone
}