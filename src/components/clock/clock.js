import React from "react";
import styles from "./clock.module.scss";
import { useTimer } from "react-timer-hook";

const pad = (num, size = 2) => {
  let s = String(num);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};

const Clock = ({ expiryTimestamp, setIsExpired }) => {
  let { seconds, minutes, hours, days, start } = useTimer({
    expiryTimestamp: expiryTimestamp,
    onExpire: () => setIsExpired(true)
  });

  start();

  return (
    <>
      <div className={styles.clock}>
        {pad(days ? days * 24 + hours : hours)}:{pad(minutes)}:
        <span className={styles.clock__seconds}>{pad(seconds)}</span>
      </div>
    </>
  );
};

export default Clock;
