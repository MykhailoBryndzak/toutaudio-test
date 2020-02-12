import {createContext} from "react";

function noop() {
}

export const AuthContext = createContext({
  login: noop,
  register: noop,
  logout: noop,
  isAuthenticated: false,
  isAdmin: false
});