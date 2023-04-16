import React, { useState, Fragment } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Select,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

// Dummy data for orders
const orders = [
  {
    id: 1,
    order_date: "2022-02-15",
    user_id: 1,
    name: "Lars Ulrich",
    status: "Delivered",
    order_lines: [
      { id: 1, order_id: 1, product_id: 1, quantity: 2 },
      { id: 2, order_id: 1, product_id: 2, quantity: 1 },
    ],
  },
  {
    id: 2,
    order_date: "2022-03-01",
    user_id: 1,
    name: "James Hetfield",
    status: "Pending",
    order_lines: [
      { id: 3, order_id: 2, product_id: 3, quantity: 3 },
      { id: 4, order_id: 2, product_id: 4, quantity: 2 },
    ],
  },
];

// Dummy data for products
const products = [
  { id: 1, name: "Latte", price: 3.5 },
  { id: 2, name: "Cappuccino", price: 3 },
  { id: 3, name: "Espresso", price: 2 },
  { id: 4, name: "Mocha", price: 4 },
];

/**
 *
 * The ProfileViewOrders component is a React functional component used for displaying
 * the orders a user has made. It uses a table to do so, and each order can be clicked
 * so that the user can view the details of that order.
 * @returns {JSX.Element} The JSX code for the ProfileViewOrders component.
 */
const AdminOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    // TODO: Change order status in the data source
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

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography variant="h5" sx={{ color: "secondary.main" }}>
          Orders
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }}>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                onClick={() => handleOrderClick(order)}
                sx={{ cursor: "pointer" }}
              >
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.order_date}</TableCell>
                <TableCell>{order.user_id}</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>
                  {order.order_lines.reduce((total, ol) => {
                    return (
                      total +
                      products.find((p) => p.id === ol.product_id).price *
                        ol.quantity
                    );
                  }, 0)}{" "}
                  NOK
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={Boolean(selectedOrder)} onClose={handleClose}>
        <DialogTitle>
          {selectedOrder && `Order ${selectedOrder.id}`}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={4}>
              <Typography variant="subtitle1">Product</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" align="right">
                Quantity
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" align="right">
                Price
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" align="right">
                Total
              </Typography>
            </Grid>
            {selectedOrder?.order_lines.map((orderLine) => (
              <Fragment key={orderLine.id}>
                <Grid item xs={4}>
                  <Typography variant="body1">
                    {products.find((p) => p.id === orderLine.product_id).name}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1" align="right">
                    {orderLine.quantity}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body1" align="right">
                    {products
                      .find((p) => p.id === orderLine.product_id)
                      .price.toFixed(2)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body1" align="right">
                    {(
                      products.find((p) => p.id === orderLine.product_id)
                        .price * orderLine.quantity
                    ).toFixed(2)}
                  </Typography>
                </Grid>
              </Fragment>
            ))}
            <Grid item xs={6}>
              <Typography variant="h6">Total</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" align="right">
                {selectedOrder?.order_lines
                  .reduce((total, ol) => {
                    return (
                      total +
                      products.find((p) => p.id === ol.product_id).price *
                        ol.quantity
                    );
                  }, 0)
                  .toFixed(2)}{" "}
                NOK
              </Typography>
            </Grid>
          </Grid>
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
              <MenuItem value="Pending">Pending</MenuItem>
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
            sx={{ color: "error.main" }}
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
