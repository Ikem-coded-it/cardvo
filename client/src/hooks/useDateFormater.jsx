import { useState, useEffect } from 'react'

function useDateFormater(JSDate) {
  const [newDate, setNewDate] = useState("");

  useEffect(() => {
    const date = JSDate.split("T")[0];
    const split = date.split('-')
    const year = split[0];
    const month = split[1];

    const splitYear = year.split('');

    setNewDate(`${month}/${splitYear[2] + splitYear[3]}`);
  }, [JSDate])
  return newDate
}

export default useDateFormater