import React, { useEffect, useState } from 'react';
import './SignupForm.css';

const SignupForm = ({ data, onChangeData }) => {
  const [state, setState] = useState(data || {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    neptunCode: ""
  });

  useEffect(() => {
    onChangeData(state);
  }, [state, onChangeData]);

  const handleChange = (e) => {
    let { id, value } = e.target;
    if (id === 'neptunCode') {
      value = value.trim().toUpperCase();
    }
    setState(prevState => ({ ...prevState, [id]: value }));
  };

  return (
    <>
      <form autoComplete="off">
        <label htmlFor="name" class="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          placeholder="John Smith"
          value={state.name}
          onChange={handleChange}
          autoFocus
          autoComplete="off"
        />
        <label htmlFor="email" class="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          placeholder="mail@examples.com"
          value={state.email}
          onChange={handleChange}
        />
        <label htmlFor="password" class="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-input"
          placeholder="••••••••"
          value={state.password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword" class="form-label">
          Confirm password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="form-input"
          placeholder="••••••••"
          value={state.confirmPassword}
          onChange={handleChange}
        />
        <label htmlFor="neptunCode" class="form-label">
          Neptun code
        </label>
        <input
          type="text"
          id="neptunCode"
          className="form-input"
          placeholder="A1B2C3"
          maxLength="6"
          value={state.neptunCode}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default SignupForm;
