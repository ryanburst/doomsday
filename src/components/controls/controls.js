import React, { useState } from "react";
import cx from "classnames";
import styles from "./controls.module.scss";
import moment from "moment";
import { useFullScreen } from "react-browser-hooks";

const Controls = props => {
  const setExpiryTimestamp = props.setExpiryTimestamp;

  const { open, fullScreen } = useFullScreen();

  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [time, setTime] = useState(
    moment(new Date())
      .add("1", "hour")
      .format("kk:mm")
  );

  const update = () => {
    setExpiryTimestamp(moment(`${date} ${time}`).toDate());
  };

  return (
    <>
      <div
        className={cx(styles.controls, {
          [styles["controls--fullscreen"]]: fullScreen
        })}
      >
        <input
          className={styles.controls__input}
          type="date"
          value={date}
          onChange={evt => setDate(evt.target.value)}
        />
        <input
          className={styles.controls__input}
          type="time"
          value={time}
          step="1"
          onChange={evt => setTime(evt.target.value)}
        />
        <button
          className={styles.controls__button}
          type="submit"
          onClick={update}
        >
          Update
        </button>
        <button className={styles.controls__button} onClick={open}>
          Fullscreen
        </button>
      </div>
    </>
  );
};

export default Controls;
