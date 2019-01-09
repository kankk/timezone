// 格式化数字
function _formatNumber(number) {
  let _number = parseInt(number);
  if (!Number.isNaN(_number)) {
    _number = _number < 10 ? `0${_number}` : `${_number}`;
  } else {
    _number = '';
  }
  return _number;
}

// 根据时区获取timestamp
function getTimestampByTimezone(timezone) {
  const _now = new Date();
  return (+_now) + (timezone * 60 * 60 * 1000 + _now.getTimezoneOffset() * 60 * 1000);
}

// 根据timestamp返回格式化字符串
function formatTimestamp(timestamp, separator = '-') {
  const _thatTime = timestamp ? new Date(timestamp) : new Date();
  const year = _thatTime.getFullYear();
  const month = _formatNumber(_thatTime.getMonth() + 1);
  const date = _formatNumber(_thatTime.getDate());

  const hour = _formatNumber(_thatTime.getHours());
  const minute = _formatNumber(_thatTime.getMinutes());
  const second = _formatNumber(_thatTime.getSeconds());

  return `${year}${separator}${month}${separator}${date} ${hour}:${minute}:${second}`;
}

module.exports = {
  getTimestampByTimezone,
  formatTimestamp
}