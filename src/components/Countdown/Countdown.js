import "./Countdown.css";
import Image from "./Utils/tag-heuer.svg";
import { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownTUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className="countdown">
      <div className="image-container">
        <img className="image" src={Image} />
      </div>

      <div className="title-container">
      <span>El torneo comienza en</span>
      </div>

      <div className="text-container">
        <p>
        <span>{remainingTime.days}</span>
        <span>Días</span>
        </p>
        <p>
        <span className="two-numbers">{remainingTime.hours}</span>
        <span>Horas</span>
        </p>
        <p>
        <span className="two-numbers">{remainingTime.minutes}</span>
        <span>Minutos</span>
        </p>
        <p>
        <span className="two-numbers">{remainingTime.seconds}</span>
        <span>Segundos</span>
        </p>
      </div>
      
    </div>
  );
};

export default CountdownTimer;
