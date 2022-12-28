import React, { useState, useEffect } from 'react';
import classes from './dateTime.module.css';

function DateTime() {

  const [date, setDate] = useState({    
    day: "",
    month: "",
    year: "",
    hours: "",
    minutes: "",
    seconds: ""
  });

  const datetimer = () => {
    const date = new Date();
    setDate({
      day: date.getDate(),
      month: new Intl.DateTimeFormat([], {month: "short"}).format(date.getMonth()),
      year: date.getFullYear(),
      hours: date.getHours(),
      minutes: date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
      seconds: date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
    });
  };

  useEffect(() => {
    const timerId = setTimeout(datetimer, 1000);
    return () => clearTimeout(timerId);
  }, [date]);

  return (
    <div className={classes.dateTime}>(<span>{date.day}</span> <span>{date.month}</span> <span>{date.year}</span>, <span>{date.hours}</span>:<span>{date.minutes}</span>:<span>{date.seconds})</span>
    </div>
  );
}

export default DateTime;