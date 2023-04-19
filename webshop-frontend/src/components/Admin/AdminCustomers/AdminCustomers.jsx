import React from "react";
import TitledBox from "../../Standard_components/TitledBox";
import { Box } from "@mui/system";
import CustomerTable from "./CustomerTable";

/**
 *
 * The AdminCustomers component is a React functional component used for showing
 * all the customers in the database, with the option to delete a customer
 * from the database.
 * @returns {JSX.Element} The JSX code for the AdminTestimonials component.
 */
const AdminCustomers = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <TitledBox title="Customers" />
      <CustomerTable />
    </Box>
  );
};

export default AdminCustomers;
