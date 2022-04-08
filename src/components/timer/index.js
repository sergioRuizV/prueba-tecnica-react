import React from "react";
import "./index.css";

const Timer = (props) => {
  return (
    <div className="mt-100 layout-column align-items-center justify-content-center">
      <div className="timer-value" data-testid="timer-value" id="timer-value">
        {props.initial}
      </div>
      <button className="large" data-testid="stop-button">
        Detén el temporizador
      </button>
    </div>
  );
};

export default Timer;
