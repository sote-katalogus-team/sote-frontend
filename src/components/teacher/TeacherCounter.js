import React, { useState } from 'react';
import { useEffect } from 'react';
import Countdown, { zeroPad } from "react-countdown";
import axios from "axios";
import './TeacherCounter.css';
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";


const TeacherCounter = ({counterValue, code, selection, onCounterComplete }) => {
  const counter = Date.now() + parseInt(counterValue);
  const url = process.env.REACT_APP_URL;
  const [endMessageVisible, setEndMessageVisible] = useState(false);
  const [cookies, setCookies] = useCookies(["user"])

  useEffect(() => {
    onCounterComplete(endMessageVisible);
  }, [endMessageVisible, onCounterComplete]);

  const handleComplete = () => {
    axios
      .post(
        url + "/" + selection.type + "/" + selection.item.id + "/closeClass"
      ,{}, {headers: authHeader(cookies.user)})
      .then((res) => console.log(res.data));
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
