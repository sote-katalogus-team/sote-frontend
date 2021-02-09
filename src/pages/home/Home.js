import React from 'react';
import './home.css';

const Home = () => {

  const goToRegister = () => {
    window.location = "/signup"
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if (password === "admin" && username === "admin") {
      window.location = "/admin/new-lesson"
    }
    if (password === "oktato" && username === "oktato") {
      window.location = "/teacher"
    }
    if (password === "student" && username === "student") {
      window.location = "/student"
    }




  }







  window.document.body.style.backgroundColor = "rgba(41, 139, 229, 1)"


  return (
  <div className="main__mainContainer">
    <div className={"home__image"}><img src="https://www.semmelweiskiado.hu/images/termekek/2/1691/semmelweis_kiado_logo_1608213956.jpg" alt="logo"/></div>
    <form onSubmit={handleLogin} >
   <div className="main__LoginContainer">
        <input required={"required"} id={"username"} placeholder={"username"} type="text" className="main__usernameInput"/><br/>
        <input required={"required"} id={"password"} placeholder={"password"} type="password" className="main__passwordInput"/>

    </div>
      <div className="main__buttonContainer">
        <button type={"submit"} className={'main__loginButton'} >Login</button>
      </div>
    </form>
    <div className="main__buttonContainer2">


      <button onClick={goToRegister}  className={'main__registerButton'}>Register</button>
    </div>

  </div>
  );
};

export default Home;
