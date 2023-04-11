import React, { useMemo, useState } from "react";
import cookie from "cookie";

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
    const cookies = cookie.parse(document.cookie);
    return cookies.jwt ? true : false;
  });

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    document.cookie = cookie.serialize("jwt", "", { maxAge: -1 }); // Remove the JWT cookie
  };

  const value = useMemo(
    () => ({
      loggedIn,
      handleLogin,
      handleLogout,
    }),
    [loggedIn]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
