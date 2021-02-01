import React from 'react';
import './home.css';

const Home = () => {


  return (
  <div className="main__mainContainer">
    <div className={"home__image"}><img src="https://www.semmelweiskiado.hu/images/termekek/2/1691/semmelweis_kiado_logo_1608213956.jpg" alt="logo"/></div>
    <a className={'main__loginButton'} href="/login">Login</a>
    <a className={'main__registerButton'} href="/register">Register</a>
  </div>
  );
};

export default Home;
