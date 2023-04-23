import React from "react";
import { Grid, Typography } from "@mui/material";

/**
 * OrderLine is a React functional component used for rendering an individual
 * row in an order details table. It displays the product's name, quantity, price,
 * and the calculated total for that product in the order.
 *
 * @component
 * @param {Object} props - The properties passed to the component
 * @param {Object} props.product - The product object containing the product's data
 * @param {number} props.quantity - The quantity of the product in the order
 * @example
 * const product = { id: 1, name: 'Latte', price: 3.5 };
 * const quantity = 2;
 * return (
 *   <OrderLine product={product} quantity={quantity} />
 * );
 */
const OrderLine = ({ productName, price, quantity }) => {
  return (
    <>
      <Grid item xs={4}>
        <Typography variant="body1">{productName}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body1" align="right">
          {quantity}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body1" align="right">
          {price.toFixed(2)}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body1" align="right">
          {(price * quantity).toFixed(2)}
        </Typography>
      </Grid>
    </>
  );
};

export default OrderLine;
