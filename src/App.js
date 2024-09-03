import { useState } from "react";
import { Helmet } from "react-helmet";
import moment from "moment";
import Clock from "./components/clock";
import Controls from "./components/controls";
import cx from "classnames";

import "./App.css";

let defaultExpiration = moment(new Date()).toDate();
defaultExpiration.setSeconds(defaultExpiration.getSeconds() + 3600); // +1 hour

function App() {
  const [isExpired, setIsExpired] = useState(false);
  const [expiryTimestamp, setExpiryTimestamp] = useState(defaultExpiration);

  return (
    <div
      className={cx("App", {
        "animation--flash": isExpired,
      })}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doomsday Clock</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=B612+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Cutive+Mono&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=M+PLUS+1+Code:wght@100..700&family=PT+Mono&family=Red+Hat+Mono:ital,wght@0,300..700;1,300..700&family=Rubik+Mono+One&family=VT323&display=swap" rel="stylesheet"/>
      </Helmet>

      <Clock expiryTimestamp={expiryTimestamp} setIsExpired={setIsExpired} />
      <Controls setExpiryTimestamp={setExpiryTimestamp} />
    </div>
  );
}

export default App;
