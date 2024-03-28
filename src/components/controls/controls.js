import React, { useState } from "react";
import cx from "classnames";
import moment from "moment";
import { useFullScreen } from "../../util/useFullScreen";

import "./controls.css";

const Controls = ({ setExpiryTimestamp }) => {
  const { open, fullScreen } = useFullScreen();

  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [time, setTime] = useState(
    moment(new Date()).add("1", "hour").format("kk:mm")
  );

  const update = () => {
    setExpiryTimestamp(moment(`${date} ${time}`).toDate());
  };

  return (
    <>
      <div
        className={cx("controls", {
          "controls--fullscreen": fullScreen,
        })}
      >
        <input
          className="controls__input"
          type="date"
          value={date}
          onChange={(evt) => setDate(evt.target.value)}
        />
        <input
          className="controls__input"
          type="time"
          value={time}
          step="1"
          onChange={(evt) => setTime(evt.target.value)}
        />
        <button className="controls__button" type="submit" onClick={update}>
          Update
        </button>
        <button className="controls__button" onClick={open}>
          Fullscreen
        </button>
      </div>
    </>
  );
};

export default Controls;
