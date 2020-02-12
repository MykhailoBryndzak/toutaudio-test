import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContext";

export const RegisterPage = () => {
  const auth = useContext(AuthContext);
  const [form, setFrom] = useState({email: "", password: ""});

  const changeHandler = event => {
    setFrom({...form, [event.target.name]: event.target.value})
  };

  const registerHandler = () => {
    auth.register(form.email, form.password)
  };

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  return (
    <div className="row">
      <div className="col s4 offset-s4">
        <h1>RegisterPage</h1>
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
            <button
              className="btn purple lighten-2"
              onClick={registerHandler}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};