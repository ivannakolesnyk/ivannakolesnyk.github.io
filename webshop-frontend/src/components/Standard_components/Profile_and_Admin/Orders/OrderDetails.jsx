import React from "react";
import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import OrderLine from "./OrderLine";
import TableHeader from "./TableHeader";

/**
 * OrderDetails is a React functional component used for displaying
 * the details of a selected order, including product names, quantities,
 * individual prices, and total prices. It also calculates and displays
 * the order's total cost.
 *
 * @component
 * @param {Object} props - The properties passed to the component
 * @param {Object} props.order - The order object containing order details
 * @param {Array} props.products - The array of product objects
 * @example
 * const order = {
 *   // ... order data
 * };
 * const products = [
 *   // ... product data
 * ];
 *
 * return (
 *   <OrderDetails order={order} products={products} />
 * );
 */
const OrderDetails = ({ order, products }) => {
  const orderTotal = order?.order_lines
    .reduce((total, ol) => {
      return (
        total + products.find((p) => p.id === ol.product_id).price * ol.quantity
      );
    }, 0)
    .toFixed(2);

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <TableHeader title="Product" width={4} />
      <TableHeader title="Quantity" width={2} align="right" />
      <TableHeader title="Price" width={2} align="right" />
      <TableHeader title="Total" width={4} align="right" />
      {order?.order_lines.map((orderLine) => (
        <OrderLine
          key={orderLine.id}
          product={products.find((p) => p.id === orderLine.product_id)}
          quantity={orderLine.quantity}
        />
      ))}
      <Grid item xs={6}>
        <Typography variant="h6">Total</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6" align="right">
          {orderTotal} NOK
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OrderDetails;
