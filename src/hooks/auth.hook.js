import {useState, useEffect, useCallback} from "react";
import {useMessage} from "./message.hook";

const loginedUser = 'loginedUser';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const message = useMessage();

  const login = useCallback((email, password, redirectAfterLogin) => {
    const user = JSON.parse(localStorage.getItem(email));

    if (!user) {
      return message("User not found");
    }

    if (email === user.email && password === user.password) {
      setIsAuthenticated(true);
    } else {
      return message("Password or Email is not correct");
    }

    if (user.role === "admin") {
      setIsAdmin(true);
    }

    redirectAfterLogin && redirectAfterLogin();
    localStorage.setItem(loginedUser, JSON.stringify({email: email, password: password}))
  }, [message]);

  const register = (email, password) => {
    const candidate = localStorage.getItem(email);
    if (candidate) {
      return message("Such user already exists")
    }
    localStorage.setItem(email, JSON.stringify({email: email, password: password, role: "user"}))
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);

    localStorage.removeItem(loginedUser);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(loginedUser));
    if (user && user.email) {
      login(user.email, user.password)
    }
  }, [login]);

  return {login, logout, register, isAuthenticated, isAdmin}
};

