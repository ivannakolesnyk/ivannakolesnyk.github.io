import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
} from "@mui/material";
import { orders, products } from "./dummy";
import { ArrowBack } from "@mui/icons-material";
import OrderTable from "../../Standard_components/Profile_and_Admin/Orders/OrderTable";
import TitledBox from "../../Standard_components/TitledBox";
import OrderDetails from "../../Standard_components/Profile_and_Admin/Orders/OrderDetails";

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

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <TitledBox title="Orders"></TitledBox>

      <OrderTable
        orders={orders}
        handleOrderClick={handleOrderClick}
        products={products}
      />

      <Dialog open={Boolean(selectedOrder)} onClose={handleClose}>
        <DialogTitle>
          {selectedOrder && `Order ${selectedOrder.id}`}
        </DialogTitle>
        <DialogContent>
          <OrderDetails order={selectedOrder} products={products} />
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
