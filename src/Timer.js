import React, { useState, useEffect } from "react";
import classes from './timer.module.css';
import clock from './imgs/clock.gif';

function Timer(props) {

  const [minute, setMinute] = useState(2);
  const [second, setSecond] = useState(60);
  
  const stopTimer = () => props.transPart(true);

  useEffect(() => {
    let timerId;
    if (minute === 2) {
      timerId = setTimeout(function() {
        setSecond(second - 1);
        setMinute(1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
    if (minute === 1) {
      if (second > 0) {
        timerId = setTimeout(function() {
          setSecond(second - 1);
        }, 1000);
        return () => clearTimeout(timerId);
      }
      if (second === 0) {
        timerId = setTimeout(function() {
          setSecond(59);
          setMinute(0);
        }, 1000);
        return () => clearTimeout(timerId);
      }
    }
    if (minute === 0) {
      if (second === 0) {
        stopTimer();
        return () => clearTimeout(timerId);
      }
      timerId = setTimeout(function() {
        setSecond(second - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [minute, second, stopTimer]);

  return (
    <div className={classes['timer-container']}>
      <div className={classes.timer}>
        00:0{minute}:{second === 60 ? "00" : second < 10 ? "0" + second : second}   
      </div>   
      <div className={classes['clock-icon']}>
        <img src={clock} alt="sand clock icon" />
      </div>
    </div>
  );
}

export default Timer;