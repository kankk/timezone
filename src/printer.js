const utils = require('./utils');
const space = require('./space');
const chalk = require('chalk');

const chalkColorArr = [
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'redBright',
  'greenBright',
  'yellowBright',
  'blueBright',
  'magentaBright',
  'cyanBright',
  'whiteBright',
];

function printZone(zone) {
  const timeString = utils.formatTimestamp(utils.getTimestampByTimezone(zone.timezone));
  const name = zone['name'];
  const nameEN = zone['name-en'];

  const randomIndex = parseInt(Math.random() * chalkColorArr.length);
  const randomColorFuc = chalkColorArr[randomIndex];

  const label = `${chalk[randomColorFuc](name)}(${nameEN}):`;
  const labelWidth = 25;

  console.log(`${space.leftAlign(label, labelWidth)}${timeString}`);
}

module.exports = {
  printZone
}