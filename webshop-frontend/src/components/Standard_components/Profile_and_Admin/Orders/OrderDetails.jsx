import React, { useMemo } from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import OrderLine from "./OrderLine";
import TableHeader from "./TableHeader";
import useFetch from "../../../../hooks/useFetch";
import cookie from "cookie";
import Loading from "../../Loading";
import InternalError from "../../InternalError";
import { useAuthHeaders } from "../../../../hooks/useAuthHeaders";

/**
 * OrderDetails is a React functional component used for displaying
 * the details of a selected order, including product names, quantities,
 * individual prices, and total prices. It also calculates and displays
 * the order's total cost.
 *
 * @component
 * @param {Object} props - The properties passed to the component
 * @param {Object} props.order - The order object containing order details
 */
const OrderDetails = ({ order }) => {
  const isWidthAbove460 = useMediaQuery("(min-width:460px)");

  const { headers } = useAuthHeaders();

  const shouldFetch = useMemo(() => !!order?.id, [order]);

  const {
    data: orderlines,
    isLoading,
    error,
  } = useFetch(
    "GET",
    `orders/orderlines/${order?.id}`,
    headers,
    null,
    null,
    shouldFetch
  );

  const orderTotal = orderlines?.reduce((total, orderLine) => {
    return total + orderLine.quantity * orderLine.product.price;
  }, 0);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <InternalError />;
  }

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <TableHeader title="Product" width={4} />
      <TableHeader
        title={isWidthAbove460 ? "Number" : "Nr"}
        width={2}
        align="right"
      />
      <TableHeader title="Price" width={2} align="right" />
      <TableHeader title="Total" width={4} align="right" />
      {orderlines.map((orderLine) => (
        <OrderLine
          key={orderLine.id}
          product={orderLine.product}
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
