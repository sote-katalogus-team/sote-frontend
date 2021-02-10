import React, { useState } from 'react';
import './Signup.css';
import SignupForm from '../components/SignupForm';
import SignupCheck from '../components/SignupCheck';
import SignupVerification from '../components/SignupVerification';
import axios from "axios";

const Signup = () => {
  const url = process.env.REACT_APP_URL;
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    neptunCode: ""
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
      password: state.password
    }
    axios.post(url + "/registration", data).then(res => {
      console.log(res.data)
      window.location = "/"
    })


    //setStep(3);
  }
  const handleVerifyButtonClick = () => {
    //TODO send request to the server to verify the signup
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
          <button
            type="button"
            className="button"
            onClick={handleVerifyButtonClick}
          >
            Verify
          </button>
        </>
      )}
    </div>
  );

};

export default Signup;
