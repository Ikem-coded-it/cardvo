function getDifferenceInTime(date) {
  const now = new Date();
  const diffMilliseconds = now - date;

  // Calculate time differences in seconds, minutes, hours, and days
  const seconds = Math.floor(diffMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return seconds + (seconds === 1 ? ' second' : ' seconds') + ' ago';
  } else if (minutes < 60) {
    return minutes + (minutes === 1 ? ' minute' : ' minutes') + ' ago';
  } else if (hours < 24) {
    return hours + (hours === 1 ? ' hour' : ' hours') + ' ago';
  } else {
    return days + (days === 1 ? ' day' : ' days') + ' ago';
  }
}


module.exports = getDifferenceInTime;