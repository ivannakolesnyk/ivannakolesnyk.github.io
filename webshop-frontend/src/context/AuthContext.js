import React, { useState } from "react";

export const AuthContext = React.createContext();

/**
 *
 * The AuthProvider component provides an AuthContext to all child components.
 * It manages the user's login state and provides functions for logging in and logging out.
 * @param {object} children - The child components to be wrapped with the AuthContext.
 * @returns {JSX.Element} - The JSX code for the AuthProvider component.
 */
export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => {
    const savedLoggedIn = localStorage.getItem("loggedIn");
    return savedLoggedIn === "true" ? true : false;
  });

  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem("loggedIn", "true");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  const value = {
    loggedIn,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
