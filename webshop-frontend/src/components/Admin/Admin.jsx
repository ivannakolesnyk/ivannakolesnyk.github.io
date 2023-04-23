import React, {useEffect, useMemo} from "react";
import cookie from "cookie";
import Loading from "../Standard_components/Loading";
import InternalError from "../Standard_components/InternalError";
import jwt_decode from "jwt-decode";
import useFetch from "../../hooks/useFetch";
import { AdminTabs } from "./AdminTabs";
import {useCart} from "../../context/CartContext";
import {useNavigate} from "react-router-dom";
import {usePaymentSuccess} from "../../hooks/usePaymentSuccess";

/**
 *
 * The Admin component displays an admin's profile information and provides
 * links to edit the profile and change the password. It renders the AdminTabs component
 * to display tabs for orders, products, testimonials, and customers. The user's
 * profile information is passed down to the AdminTabs component as props and is displayed in a
 * Card component, with each piece of information shown as a ListItem.
 * @returns {JSX.Element} The JSX code for the Admin component.
 */
const Admin = () => {
  const {clearCart} = useCart();
  const navigate = useNavigate();
  const jwt = cookie.parse(document.cookie).jwt;
  const payload = jwt_decode(jwt);
  const userEmail = payload ? payload.sub : ""; // Replace 'sub' with the claim name containing the user's email

  const headers = useMemo(
    () => ({
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    }),
    [jwt]
  );

  const {
    data: profileData,
    isLoading,
    error,
  } = useFetch("GET", `users/${userEmail}`, headers);

  usePaymentSuccess(clearCart);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <InternalError />;
  }

  return <AdminTabs profileData={profileData} />;
};

export default Admin;
