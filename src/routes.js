import React from "react";
import {Switch, Route} from "react-router-dom";

import {AdminPage} from "./pages/AdminPage";
import {UserPage} from "./pages/UserPage";
import {MainPage} from "./pages/MainPage";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";

export const useRoutes = isAuthenticated => {
  if(isAuthenticated) {
    return (
      <Switch>
        <Route path="/user" exect>
          <UserPage/>
        </Route>
        <Route path="/admin" exect>
          <AdminPage/>
        </Route>
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/login" exect>
        <LoginPage/>
      </Route>
      <Route path="/register" exect>
        <RegisterPage/>
      </Route>
      <Route path="/" exect>
        <MainPage/>
      </Route>
    </Switch>
  )
};
