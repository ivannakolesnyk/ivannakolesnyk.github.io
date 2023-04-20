import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import OrderTable from "../../Standard_components/Profile_and_Admin/Orders/OrderTable";
import TitledBox from "../../Standard_components/TitledBox";
import OrderDetails from "../../Standard_components/Profile_and_Admin/Orders/OrderDetails";
import cookie from "cookie";
import jwt_decode from "jwt-decode";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../Standard_components/Loading";
import InternalError from "../../Standard_components/InternalError";

/**
 *
 * The ProfileViewOrders component is a React functional component used for displaying
 * the orders a user has made. It uses a table to do so, and each order can be clicked
 * so that the user can view the details of that order.
 * @returns {JSX.Element} The JSX code for the ProfileViewOrders component.
 */
const ProfileViewOrders = () => {
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleClose = () => {
    setSelectedOrder(null);
  };

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
    data: orders,
    isLoading,
    error,
    refetch,
  } = useFetch("GET", `orders/${userEmail}`, headers);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <InternalError />;
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <TitledBox title="Orders"></TitledBox>
      <Typography
        variant="body1"
        sx={{
          color: "secondary.main",
          textAlign: "center",
        }}
      >
        Click on an order to view more details.
      </Typography>
      <OrderTable orders={orders} handleOrderClick={handleOrderClick} />

      <Dialog open={Boolean(selectedOrder)} onClose={handleClose}>
        <DialogTitle>
          {selectedOrder && `Order ${selectedOrder.id}`}
        </DialogTitle>
        <DialogContent>
          <OrderDetails order={selectedOrder} />
        </DialogContent>

        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="text"
          startIcon={<ArrowBack />}
          onClick={() => navigate("/profile")}
          sx={{ pt: 1 }}
          color="secondary"
        >
          GO BACK
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileViewOrders;
