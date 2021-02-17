import React, { useState } from 'react';
import './Signup.css';
import SignupForm from '../components/SignupForm';
import SignupCheck from '../components/SignupCheck';
import SignupVerification from '../components/SignupVerification';
import axios from "axios";

const Signup = () => {
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false)
  const url = process.env.REACT_APP_URL;
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    neptunCode: "",
    turnusId: null
  });

  const [isValid, setIsValid] = useState(false);

  const [step, setStep] = useState(1);
  const handleChangeData = (data) => {
    setState(data);
    setIsValid(isDataValid(data));
  };
  const handleNextButtonClick = () => { setStep(2); };
  const handleBackButtonClick = () => { setStep(1); };
  const handleSignupButtonClick = () => {
    //TODO send request to the server with reg data

    let data = {
      email: state.email,
      name: state.name,
      password: state.password,
      neptunCode: state.neptunCode,
      turnusId: state.turnusId
    }
    axios.post(url + "/registration", data).then(res => {
      console.log(res.data)
    })


    setStep(3);
  }
  const handleVerifyButtonClick = () => {
    const code = document.getElementById("verificationCode").value;
    axios.post(url + "/validate", {"email": state.email, "code" : code}).then(res => {
      setAlert(true)
      setMessage(res.data)
    }).catch(error => {
      setAlert(false)
      setMessage("Incorrect code, please try again")
    })
  }
  const setAlertClassname = () => {
    if (alert) {
      return "code__alertGood"
    }
    else {
      return "code__alertBad"
    }
  }



  const isDataValid = data => {
    if (data.name.trim() === '') {
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailPattern.test(data.email)) {
      return false;
    }

    if (
      data.password.trim() === "" ||
      data.password.trim() !== data.confirmPassword.trim()
    ) {
      return false;
    }

    if (data.neptunCode.trim().length < 6) {
      return false;
    }

    return true;
  }

  function goToLogin() {
    const go = window.confirm("Are you sure about leaving this page?")
    if (go) {
      window.location = '/home';
    }
  }

  return (
    <div>
      {step === 1 && <SignupForm data={state} onChangeData={handleChangeData} />}
      {step === 1 && (
        <button
          type="button"
          className="button"
          disabled={!isValid}
          onClick={handleNextButtonClick}
        >
          Next
        </button>
      )}
      {step === 2 && <SignupCheck data={state} />}
      {step === 2 && (
        <>
          <button
            type="button"
            className="button"
            onClick={handleSignupButtonClick}
          >
            Signup
          </button>
          <button
            type="button"
            className="button"
            onClick={handleBackButtonClick}
          >
            Back
          </button>
        </>
      )}
      {step === 3 && <SignupVerification />}
      {step === 3 && (
        <>
          <input type="text" id="verificationCode" className="codeInput" autoFocus />
          {message && (
              <div className="form-group">
                <div className={setAlertClassname()} role="alert">
                  {message}
                </div>
              </div>
          )}
          <button
            type="button"
            className="button"
            onClick={handleVerifyButtonClick}
          >
            Verify
          </button>
          <button
              type="button"
              className="button"
          onClick={goToLogin}
          >
            Go to Login
          </button>
        </>
      )}
    </div>
  );

}

export default Signup;
