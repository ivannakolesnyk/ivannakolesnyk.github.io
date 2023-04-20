import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

/**
 *
 * A custom table component that renders orders data
 * with columns that only appear if the relevant
 * prop is provided.
 * @param {Array} orders - An array of order objects
 * @param {Function} handleOrderClick - A function to handle order click events
 * @returns {JSX.Element} - Returns a custom table component
 */
const OrderTable = ({ orders, handleOrderClick }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }}>
        <TableHead>
          <TableRow>
            {orders.some((order) => order.id) && (
              <TableCell>Order ID</TableCell>
            )}
            {orders.some((order) => order.status) && (
              <TableCell>Status</TableCell>
            )}
            {orders.some((order) => order.order_date) && (
              <TableCell>Order Date</TableCell>
            )}
            {orders.some((order) => order.user_id) && (
              <TableCell>User ID</TableCell>
            )}
            {orders.some((order) => order.name) && <TableCell>Name</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.id}
              onClick={() => handleOrderClick(order)}
              sx={{ cursor: "pointer" }}
            >
              {order.id && <TableCell>{order.id}</TableCell>}
              {order.status && <TableCell>{order.status}</TableCell>}
              {order.order_date && <TableCell>{order.order_date}</TableCell>}
              {order.user_id && <TableCell>{order.user_id}</TableCell>}
              {order.name && <TableCell>{order.name}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
