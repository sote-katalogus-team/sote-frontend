import React from 'react';
import './SignupCheck.css';

const SignupCheck = ({data}) => {

  return (
    <div className="fields">
      <div className="checkTitle">Please confirm your data</div>
      <div className="checkField">Name: {data.name}</div>
      <div className="checkField">Email: {data.email}</div>
      <div className="checkField">Password: {data.password}</div>
      <div className="checkField">Neptun Code: {data.neptunCode}</div>
    </div>
  );

};

export default SignupCheck;
