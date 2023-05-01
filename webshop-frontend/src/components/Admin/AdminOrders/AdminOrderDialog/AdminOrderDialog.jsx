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
import OrderDetails from "../../../Standard_components/Profile_and_Admin/Orders/OrderDetails";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

/**
 * AdminOrderDialog is a React functional component used to display a dialog
 * containing order details. The component allows admins to view order details,
 * change the order status, and delete an order. The dialog is rendered when an
 * order is selected in the AdminOrders component.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.value - The selected order object containing order details.
 * @param {function} props.onClose - Function to close the dialog.
 * @param {function} props.onChange - Function to handle changes in the order status.
 * @param {function} props.onClick - Function to handle deleting the order.
 * @returns {JSX.Element} The JSX code for the AdminOrderDialog component.
 */
export function AdminOrderDialog(props) {
  return (
    <Dialog
      open={Boolean(props.value)}
      onClose={props.onClose}
      aria-labelledby="order-dialog-title"
    >
      <DialogTitle id="order-dialog-title">
        {props.value && `Order ${props.value.id}`}
      </DialogTitle>
      <DialogContent>
        <OrderDetails order={props.value} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle1" sx={{ mr: 2 }}>
            Status:
          </Typography>
          <Select
            labelId="status-label"
            id="status"
            value={props.value?.status ?? ""}
            onChange={props.onChange}
            aria-label="Order status"
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
          onClick={props.onClick}
          aria-label="Delete order"
        >
          Delete
        </Button>
        <Button
          variant="contained"
          onClick={props.onClose}
          aria-label="Close order details"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
