import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../Standard_components/Loading";
import InternalError from "../../Standard_components/InternalError";
import { useCart } from "../../../context/CartContext";
import { usePaymentSuccess } from "../../../hooks/usePaymentSuccess";
import { useAuthHeaders } from "../../../hooks/useAuthHeaders";
import { ProfileOrderBox } from "./ProfileOrderBox";

/**
 *
 * The ProfileViewOrders component is a React functional component used for
 * displaying the orders a user has made. It serves as a wrapper for the
 * ProfileOrderBox component, which handles the presentation and interaction
 * of the user's orders.
 * @returns {JSX.Element} The JSX code for the ProfileViewOrders component.
 */
const ProfileViewOrders = () => {
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { clearCart } = useCart();

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleClose = () => {
    setSelectedOrder(null);
  };

  const { headers, userEmail } = useAuthHeaders();

  const {
    data: orders,
    isLoading,
    error,
  } = useFetch("GET", `orders/${userEmail}`, headers);

  usePaymentSuccess(clearCart);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <InternalError />;
  }

  return (
    <ProfileOrderBox
      orders={orders}
      handleOrderClick={handleOrderClick}
      value={selectedOrder}
      onClose={handleClose}
      onClick={() => navigate("/profile")}
    />
  );
};

export default ProfileViewOrders;
