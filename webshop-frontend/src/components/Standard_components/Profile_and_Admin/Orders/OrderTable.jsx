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

  console.log(orders);
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

            {isLoggedInAndAdmin(loggedIn, getJwtPayload) ? (
              <>
                <TableCell>User ID</TableCell>
                <TableCell>Name</TableCell>
              </>
            ) : (
              <TableCell>Total</TableCell>
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
              {order.id && <TableCell>{order.id}</TableCell>}
              {order.status && <TableCell>{order.status}</TableCell>}
              {order.order_date && (
                <TableCell>
                  {new Date(order.order_date).toISOString().slice(0, 10)}
                </TableCell>
              )}

              {isLoggedInAndAdmin(loggedIn, getJwtPayload) ? (
                  <>
                    <TableCell>{order?.user?.id}</TableCell>
                    <TableCell>{order?.user?.name}</TableCell>
                  </>
              ) : (
                  <TableCell>{order?.total} NOK</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
