function formatDate(expiration) {
  const month = expiration.getMonth();
  const year = expiration.getFullYear();
  const splitYear = year.toString().split('');
  return`${month}/${splitYear[2] + splitYear[3]}`;
}

module.exports = formatDate;