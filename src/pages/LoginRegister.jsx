import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { saveSessionStorage } from "../helpers/handleSessionStorage";
import { IoMdArrowBack } from "react-icons/io";

import "./LoginRegister.css";

export const LoginRegister = () => {
  const [email, setEmail] = useState(""); /*correo@correo.com  */
  const [password, setPassword] = useState(""); /* P@ssw0rd */
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  const { userSession, setUserSession } = useContext(UserContext);

  const loginUser = async () => {
    console.log(email, password);
    try {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        email: email,
        password: password,
      });

      let response = await fetch("https://localhost:7122/login", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      let data = await response.text();
      let dataObject = JSON.parse(data);

      setStatus(dataObject?.status);

      if (dataObject?.status !== 200) {
        setMessage(dataObject?.message);
      }

      if (dataObject?.status === 200) {
        setUserSession(JSON.parse(data));
        setTimeout(() => {
          saveSessionStorage("userSession", data);
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const registerUser = async () => {
    console.log(firstName, lastName, email, password, passwordConfirmation);
    try {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: passwordConfirmation,
      });

      let response = await fetch("https://localhost:7122/register", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      let data = await response.text();
      let dataObject = JSON.parse(data);

      setStatus(dataObject?.status);
      console.log("dataObject: ", dataObject);
      console.log("status: ", dataObject?.status);
      if (dataObject?.status !== 201) {
        setMessage(dataObject?.message);
      }
      if (dataObject?.status === 201) {
        setUserSession(JSON.parse(data));
        setTimeout(() => {
          saveSessionStorage("userSession", data);
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="login-register-page">
      <div className="back-arrow-div">
        <NavLink to="/" className="arrow-icon">
          <IoMdArrowBack />
        </NavLink>
      </div>
      <div className="active-tabs">
        <input
          type="radio"
          name="active_tabs"
          id="btn-1"
          className="btn-1"
          defaultChecked
        />
        <label htmlFor="btn-1" className="btn">
          Login
        </label>
        <input type="radio" name="active_tabs" id="btn-2" className="btn-2" />
        <label htmlFor="btn-2" className="btn">
          Register
        </label>

        <div className="tabs-container">
          <div className="tab-1">
            <div className="tab-1-content">
              <input
                type="text"
                name=""
                id="email"
                placeholder="Email"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name=""
                id="password"
                placeholder="Password"
                autoComplete="off"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="submit-btn" onClick={loginUser}>
                {" "}
                Log in
              </button>
              <p>
                {status === 200 ? (
                  <span className="login-success">Successfully Logged in</span>
                ) : (
                  <span className="login-error">{message}</span>
                )}
              </p>
            </div>
          </div>
          <div className="tab-2">
            <div className="tab-2-content">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="FirstName"
                autoComplete="off"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="LastName"
                autoComplete="off"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                type="text"
                name="email"
                id="email2"
                placeholder="Email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                id="password2"
                placeholder="Password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                name=""
                id="passwordConfirmation"
                placeholder="Password Confirmation"
                autoComplete="off"
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
              />
              <button className="submit-btn" onClick={registerUser}>
                {" "}
                Register{" "}
              </button>
              <p>
                {status === 201 ? (
                  <span className="login-success">Successfully Register</span>
                ) : (
                  <span className="login-error">{message}</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
