import React, { useContext } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { AuthContext } from "../../../../context/AuthContext";
import { isLoggedInAndAdmin } from "../../../../utils/auth/auth";

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
  const { loggedIn, getJwtPayload } = useContext(AuthContext);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }}>
        <TableHead>
          <TableRow>
            {orders.some((order) => order.id) && (
              <TableCell aria-label="Order ID">Order ID</TableCell>
            )}
            {orders.some((order) => order.status) && (
              <TableCell aria-label="Status">Status</TableCell>
            )}
            {orders.some((order) => order.order_date) && (
              <TableCell aria-label="Order Date">Order Date</TableCell>
            )}

            {isLoggedInAndAdmin(loggedIn, getJwtPayload) ? (
              <>
                <TableCell aria-label="User ID">User ID</TableCell>
                <TableCell aria-label="Name">Name</TableCell>
              </>
            ) : (
              <TableCell aria-label="Total">Total</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.id}
              onClick={() => handleOrderClick(order)}
              sx={{ cursor: "pointer" }}
            >
              {order.id && (
                <TableCell aria-label={`Order ID: ${order.id}`}>
                  {order.id}
                </TableCell>
              )}
              {order.status && (
                <TableCell aria-label={`Status: ${order.status}`}>
                  {order.status}
                </TableCell>
              )}
              {order.order_date && (
                <TableCell
                  aria-label={`Order Date: ${new Date(order.order_date)
                    .toISOString()
                    .slice(0, 10)}`}
                >
                  {new Date(order.order_date).toISOString().slice(0, 10)}
                </TableCell>
              )}

              {isLoggedInAndAdmin(loggedIn, getJwtPayload) ? (
                <>
                  <TableCell aria-label={`User ID: ${order?.user?.id}`}>
                    {order?.user?.id}
                  </TableCell>
                  <TableCell aria-label={`Name: ${order?.user?.name}`}>
                    {order?.user?.name}
                  </TableCell>
                </>
              ) : (
                <TableCell aria-label={`Total: ${order?.total} NOK`}>
                  {order?.total} NOK
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
