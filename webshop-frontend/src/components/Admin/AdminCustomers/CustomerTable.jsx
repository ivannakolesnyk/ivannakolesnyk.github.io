import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import customers from "./dummycustomers";

/**
 *
 * CustomerTable is a React functional component that displays customer data in a Material-UI table.
 * The table has columns for user ID, name, email, phone number, postal code, address, and delete action.
 * Each row in the table represents one customer, and the delete button allows the user to remove a customer from the table.
 * The component uses a confirmation dialog to ensure the user wants to delete the customer before performing the action.
 * @returns {JSX.Element} The JSX code for the CustomerTable component.
 */
const CustomerTable = () => {
  const [customerData, setCustomerData] = React.useState(customers);

  const handleDelete = (userId) => {
    setCustomerData(
      customerData.filter((customer) => customer.user_id !== userId)
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Postal Code</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.user_id}>
              <TableCell>{customer.user_id}</TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phone_number}</TableCell>
              <TableCell>{customer.postal_code}</TableCell>
              <TableCell>{customer.address}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this customer?"
                      )
                    ) {
                      handleDelete(customer.user_id);
                    }
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;
