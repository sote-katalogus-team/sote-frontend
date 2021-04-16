import React, { useEffect, useState } from 'react';
import './SignupForm.css';
import axios from "axios";

const SignupForm = ({ data, onChangeData }) => {
  const url = process.env.REACT_APP_URL;
  const [state, setState] = useState(data || {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    neptunCode: "",
    turnusId: null,
    turnusName: ""
  });
  const [turns, setTurns] = useState([])

  useEffect(() => {
    onChangeData(state);
  }, [state, onChangeData]);


  useEffect(() => {
    fetchTurns();
  },[])


  async function  fetchTurns() {
    axios.get(url+ "/turnus/all_by_year").then((res) => {
      setTurns(res.data);
      if (state.turnusId === null) {
        setState((prevState) => ({
          ...prevState,
          turnusId: data[0]?.id,
          turnusName: data[0]?.name,
        }));
      }
    })
  }



  const handleChange = (e) => {
    let { id, value } = e.target;
    if (id === 'neptunCode') {
      value = value.trim().toUpperCase();
    }
    if (id === 'turnusId') {
      setState((prevState) => ({
        ...prevState,
        [id]: value,
        turnusName: e.target.options[e.target.selectedIndex].text,
      }));
    } else {
      setState(prevState => ({ ...prevState, [id]: value }));
    }
  };

  return (
    <>
      <form autoComplete="off">
        <label htmlFor="name" className="form-label">
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
        <label htmlFor="email" className="form-label">
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
        <label htmlFor="password" className="form-label">
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
        <label htmlFor="confirmPassword" className="form-label">
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
        <label htmlFor="neptunCode" className="form-label">
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
        <label htmlFor="turnus-select" className={"form-label"}>Turn</label>
        <select name="turn" id="turnusId" className="form-select form-input" value={state.turnusId} onChange={handleChange}>
          <option value="" selected disabled hidden>Please select a turn</option>
          {turns.map(turn => (
              <option key={turn.id} value={turn.id} className="turn__option">{turn.name}</option>
          ))}
        </select>

      </form>
    </>
  );
};

export default SignupForm;
