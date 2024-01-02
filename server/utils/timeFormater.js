const { differenceInHours, differenceInMinutes, differenceInSeconds, differenceInDays } = require("date-fns");

function getDifferenceInTime(date) {
  const seconds = differenceInSeconds(
    new Date(),
    date
  )
  if (seconds >= 60) {
    const minutes = differenceInMinutes(
      new Date(),
      date
    )

    if(minutes >= 60) {
      const hours = differenceInHours(
        new Date(),
        date
      )

      if (hours >= 24) {
        const days = differenceInDays(
          new Date(),
          date
        )

        return days + ' days ago';
        
      } else {
        return hours + ' hrs ago';
      }

    } else {
      return minutes + ' mins ago';
    }

  } else {
    return seconds + ' secs ago'
  }
};

module.exports = getDifferenceInTime;