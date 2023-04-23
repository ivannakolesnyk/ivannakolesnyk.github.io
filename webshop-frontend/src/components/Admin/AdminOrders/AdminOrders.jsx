import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import OrderTable from "../../Standard_components/Profile_and_Admin/Orders/OrderTable";
import TitledBox from "../../Standard_components/TitledBox";
import OrderDetails from "../../Standard_components/Profile_and_Admin/Orders/OrderDetails";
import cookie from "cookie";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../Standard_components/Loading";
import InternalError from "../../Standard_components/InternalError";
import {useAuthHeaders} from "../../../hooks/useAuthHeaders";

/**
 * AdminOrders is a React functional component used for managing and displaying
 * the orders in the admin panel. It renders a table with the list of orders and
 * allows admins to view order details, change the status of orders, and delete orders.
 *
 * @component
 * @example
 * return (
 *   <AdminOrders />
 * )
 */
const AdminOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const { headers } = useAuthHeaders();


  const { data: orders, isLoading, error } = useFetch("GET", `orders`, headers);

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setSelectedOrder((prevOrder) => {
      return {
        ...prevOrder,
        status: newStatus,
      };
    });
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleClose = () => {
    setSelectedOrder(null);
  };

  if (isLoading) return <Loading />;
  if (error) return <InternalError />;

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <TitledBox title="Orders" />
      <OrderTable orders={orders} handleOrderClick={handleOrderClick} />
      <Dialog open={Boolean(selectedOrder)} onClose={handleClose}>
        <DialogTitle>
          {selectedOrder && `Order ${selectedOrder.id}`}
        </DialogTitle>
        <DialogContent>
          <OrderDetails order={selectedOrder} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="subtitle1" sx={{ mr: 2 }}>
              Status:
            </Typography>
            <Select
              labelId="status-label"
              id="status"
              value={selectedOrder?.status ?? ""}
              onChange={handleStatusChange}
            >
              <MenuItem value="Paid">Paid</MenuItem>
              <MenuItem value="Processing">Processing</MenuItem>
              <MenuItem value="Shipped">Shipped</MenuItem>
              <MenuItem value="Delivered">Delivered</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
              <MenuItem value="Refunded">Refunded</MenuItem>
            </Select>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              if (window.confirm("Delete order?")) {
                console.log("Order deleted!");
                // TODO: Delete the order from the data source
              }
            }}
          >
            Delete
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminOrders;
