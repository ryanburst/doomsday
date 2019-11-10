import React, { useEffect } from "react";
import styles from "./clock.module.scss";
import { useTimer } from "react-timer-hook";

const pad = num => {
  return `${num + 100}`.substring(1);
};

const Clock = props => {
  const expiryTimestamp = props.expiryTimestamp;
  const setIsExpired = props.setIsExpired;

  const { seconds, minutes, hours, start, restart } = useTimer({
    expiryTimestamp: expiryTimestamp,
    onExpire: () => setIsExpired(true)
  });

  start();

  useEffect(() => {
    setIsExpired(false);
    restart(expiryTimestamp);
  }, [expiryTimestamp]);

  return (
    <>
      <div className={styles.clock}>
        {pad(hours)}:{pad(minutes)}:
        <span className={styles.clock__seconds}>{pad(seconds)}</span>
      </div>
    </>
  );
};

export default Clock;
