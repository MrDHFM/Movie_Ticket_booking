import { React, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./Login.css";

const Login = (props) => {
  console.log(props.userData);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(" ");
  const [data, setData] = useState([]);
  const [orgId, setOrgId] = useState("");
  const navigate = useNavigate();

  const userNameChange = (event) => {
    setUserName(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.userData.map((item) => {
      //console.log(item.username);
      if (item.username == userName && item.password == password) {
        navigate("/home", {
          state: { uName: userName },
        });
      } else if (
        item.username == userName &&
        item.password == password &&
        item.role == "user"
      ) {
        navigate("./user");
      } else {
        // console.log("Invalid");
        setError("Invalid Username or Password");
      }
    });
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="login_page">
        <div className="loginbox">
          <img
            alt="userLogo"
            src="https://i.imgur.com/ZYzTdD0.png"
            className="avatar"
          />
          <h1 id="login">Login Here</h1>
          <p id="error">{error}</p>
          <form onSubmit={submitHandler}>
            {/*  {console.log(error)}
          {error === 500 ? (
            <p className="error">Invalid Username or Password</p>
          ) : (
            <p className="error">{data}</p>
          )} */}
            <p>Username</p>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={userNameChange}
              placeholder="Enter Username"
              required
            />
            <p>Password</p>
            <input
              type="password"
              id="pwd"
              name="pwd"
              value={password}
              onChange={passwordChange}
              placeholder="Enter Password"
              required
            />
            <input type="submit" id="submit" value="Login" />
          </form>
        </div>
      </div>
      <div id="foot">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
