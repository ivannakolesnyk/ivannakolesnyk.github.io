import React, { useState } from "react";
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
import OrderTable from "../Standard_components/Profile_and_Admin/Orders/OrderTable";
import TitledBox from "../Standard_components/TitledBox";
import OrderDetails from "../Standard_components/Profile_and_Admin/Orders/OrderDetails";
import useFetch from "../../hooks/useFetch";
import Loading from "../Standard_components/Loading";
import InternalError from "../Standard_components/InternalError";
import { useCart } from "../../context/CartContext";
import { usePaymentSuccess } from "../../hooks/usePaymentSuccess";
import { useAuthHeaders } from "../../hooks/useAuthHeaders";

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
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <TitledBox title="Orders"></TitledBox>
      <Typography
        variant="body1"
        sx={{
          color: "secondary.main",
          textAlign: "center",
        }}
      >
        Click on orders for more details.
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
