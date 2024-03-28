import { useEffect, useRef } from "react";
import { useTimer } from "react-timer-hook";

import "./clock.css";

const pad = (num, size = 2) => {
  let s = String(num);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};

const Clock = ({ expiryTimestamp, setIsExpired }) => {
  let { seconds, minutes, hours, days, restart } = useTimer({
    expiryTimestamp: expiryTimestamp,
    onExpire: () => setIsExpired(true),
  });

  let restartRef = useRef(restart);

  useEffect(() => {
    setIsExpired(false);
    restartRef.current(expiryTimestamp);
  }, [expiryTimestamp, setIsExpired, restartRef]);

  return (
    <>
      <div className="clock">
        {pad(days ? days * 24 + hours : hours)}:{pad(minutes)}:
        <span className="clock__seconds">{pad(seconds)}</span>
      </div>
    </>
  );
};

export default Clock;
