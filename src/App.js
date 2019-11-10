import React, { useState } from "react";
import { Helmet } from "react-helmet";
import moment from "moment";
import Clock from "./components/clock";
import Controls from "./components/controls";
import "./sass/main.scss";
import cx from "classnames";
import styles from "./App.module.scss";

let defaultExpiration = moment(new Date()).toDate();
defaultExpiration.setSeconds(defaultExpiration.getSeconds() + 3600); // +1 hour

function App() {
  const [isExpired, setIsExpired] = useState(false);
  const [expiryTimestamp, setExpiryTimestamp] = useState(defaultExpiration);
  return (
    <div
      className={cx(styles.App, {
        ["animation--flash"]: isExpired
      })}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doomsday Clock</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans|Orbitron&amp;display=swap"
          rel="stylesheet"
        />
        >
      </Helmet>
      <Clock expiryTimestamp={expiryTimestamp} setIsExpired={setIsExpired} />
      <Controls setExpiryTimestamp={setExpiryTimestamp} />
    </div>
  );
}

export default App;
