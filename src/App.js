import React, {useEffect} from 'react';
import "materialize-css";

import {BrowserRouter} from "react-router-dom";

import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {Navbar} from "./components/Navbar";

function App() {
  const {login, userId, register, logout, isAuthenticated, isAdmin} = useAuth();
  const routes = useRoutes(isAuthenticated);

  useEffect(() => {
    const idAdmin = localStorage.getItem("admin@gmail.com");
    if (!idAdmin) {
      localStorage.setItem("admin@gmail.com", JSON.stringify({
        email: "admin@gmail.com",
        password: "admin",
        role: "admin"
      }))
    }
  });

  return (
    <AuthContext.Provider value={{
      login, logout, register, userId, isAuthenticated
    }}>
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin}/>
        <div className="container">
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
