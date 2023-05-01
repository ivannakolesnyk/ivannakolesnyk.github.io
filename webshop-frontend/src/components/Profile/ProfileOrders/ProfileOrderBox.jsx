import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import TitledBox from "../../Standard_components/TitledBox";
import OrderTable from "../../Standard_components/Profile_and_Admin/Orders/OrderTable";
import OrderDetails from "../../Standard_components/Profile_and_Admin/Orders/OrderDetails";
import { ArrowBack } from "@mui/icons-material";
import React from "react";

/**
 * The ProfileOrderBox component is a React functional component used for
 * displaying a user's orders in a table, along with order details in a dialog
 * when an order is clicked. This component wraps OrderTable and OrderDetails
 * components and manages the state of the dialog.
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.orders - An array of the user's orders.
 * @param {Function} props.handleOrderClick - A callback function for handling an order click.
 * @param {Object} props.value - The currently selected order.
 * @param {Function} props.onClose - A callback function for closing the order details dialog.
 * @param {Function} props.onClick - A callback function for the "GO BACK" button click event.
 * @returns {JSX.Element} The JSX code for the ProfileOrderBox component.
 */
export function ProfileOrderBox(props) {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <TitledBox title="Orders"></TitledBox>
      <Typography
        variant="body1"
        sx={{
          color: "secondary.main",
          textAlign: "center",
        }}
      >
        Click on orders for more details.
      </Typography>
      <OrderTable
        orders={props.orders}
        handleOrderClick={props.handleOrderClick}
      />

      <Dialog open={Boolean(props.value)} onClose={props.onClose}>
        <DialogTitle>{props.value && `Order ${props.value.id}`}</DialogTitle>
        <DialogContent>
          <OrderDetails order={props.value} />
        </DialogContent>

        <DialogActions>
          <Button variant="contained" onClick={props.onClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="text"
          startIcon={<ArrowBack />}
          onClick={props.onClick}
          sx={{ pt: 1 }}
          color="secondary"
        >
          GO BACK
        </Button>
      </Box>
    </Box>
  );
}
