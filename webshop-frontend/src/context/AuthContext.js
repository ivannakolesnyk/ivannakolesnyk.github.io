import React, { useMemo, useState, useCallback } from "react";
import cookie from "cookie";
import jwt_decode from "jwt-decode";
import { useCart } from "./CartContext";

export const AuthContext = React.createContext();
const getCookies = () => {
  return cookie.parse(document.cookie);
};

/**
 *
 * The AuthProvider component provides an AuthContext to all child components.
 * It manages the user's login state and provides functions for logging in and logging out.
 * @param {object} children - The child components to be wrapped with the AuthContext.
 * @returns {JSX.Element} - The JSX code for the AuthProvider component.
 */
export const AuthProvider = ({ children }) => {
  const { clearCart } = useCart();
  const [loggedIn, setLoggedIn] = useState(() => {
    return getCookies().jwt ? true : false;
  });

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = useCallback(() => {
    clearCart();
    document.cookie = cookie.serialize("jwt", "", {
      maxAge: -1,
      path: "/",
    });
    setLoggedIn(false);
  }, [clearCart]);

  const getJwtPayload = () => {
    const jwt = getCookies().jwt;

    if (jwt) {
      const payload = jwt_decode(jwt);
      return payload;
    }

    return null;
  };

  const value = useMemo(
    () => ({
      loggedIn,
      handleLogin,
      handleLogout,
      getJwtPayload,
    }),
    [loggedIn, handleLogout]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
