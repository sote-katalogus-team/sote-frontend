import React, { useState } from 'react';
import { useEffect } from 'react';
import Countdown, { zeroPad } from "react-countdown";
import './TeacherCounter.css';


const TeacherCounter = ({counterValue, code, onCounterComplete }) => {
  const counter = Date.now() + parseInt(counterValue);

  const [endMessageVisible, setEndMessageVisible] = useState(false);

  useEffect(() => {
    onCounterComplete(endMessageVisible);
  }, [endMessageVisible, onCounterComplete]);

  const handleComplete = () => {
    //TODO http request to sign that countdown ends
    setEndMessageVisible(true);
  };

  return (
    <>
      {!endMessageVisible && (
        <Countdown
          date={counter}
          renderer={({ minutes, seconds }) => (
            <div className="counter__text">
              {zeroPad(minutes)}:{zeroPad(seconds)}
            </div>
          )}
          onComplete={handleComplete}
        />
      )}
      {endMessageVisible && <div className="counter__text">00:00</div>}

      <div className="counter__code">{code}</div>
      {endMessageVisible && (
        <div id="endMessageBox" className="counter__message__end">
          <i className="fas fa-exclamation-triangle"></i>
          <div>Az idő lejárt!</div>
        </div>
      )}
    </>
  );
};

export default TeacherCounter;
