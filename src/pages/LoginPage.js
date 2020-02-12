import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContext";
import {useHistory} from "react-router-dom";

export const LoginPage = () => {
  useEffect(() => {
    window.M.updateTextFields();
  }, []);
  const auth = useContext(AuthContext);
  const [form, setFrom] = useState({email: "", password: ""});
  const [isDisabledLogin, setIsDisabledLogin] = useState(true);
  const history = useHistory();

  const changeHandler = event => {
    setFrom({...form, [event.target.name]: event.target.value})
  };

  const changeHandlerCaptcha = event => {
    if (event.target.value === "4") {
      setIsDisabledLogin(false);
    } else {
      setIsDisabledLogin(true);
    }
  };

  const loginHandler = () => {
    auth.login(form.email, form.password, () => history.push("/user"))
  };

  return (
    <div className="row">
      <div className="col s4 offset-s4">
        <h1>LoginPage</h1>
        <div className="card">
          <div className="card-content">
            <div>
              <div className="input-field">
                <input
                  placeholder="Email"
                  id="email"
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  placeholder="Password"
                  id="password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={changeHandler}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <div className="simple-captcha">
              <p>simple captcha</p>
              <span>2+2</span>
              <input
                type="text"
                onChange={changeHandlerCaptcha}
              />
            </div>
            <button
              disabled={isDisabledLogin}
              className="btn"
              onClick={loginHandler}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};