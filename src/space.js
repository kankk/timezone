const stringLength = require('string-width');

// 居左
function leftAlign (str = '', space = 10) {
  const strLength = stringLength(str) || 0;
  return `${str}${' '.repeat(space - strLength)}`;
}

// 居右
function rightAlign (str = '', space = 10) {
  const strLength = stringLength(str) || 0;
  return `${' '.repeat(space - strLength)}${str}`;
}

module.exports = {
  leftAlign,
  rightAlign
}