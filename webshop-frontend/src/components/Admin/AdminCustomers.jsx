import React from "react";
import { CardContent, Divider, Typography } from "@mui/material";
import StandardCenteredBox from "../Standard_components/StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";

/**
 *
 * The AdminCustomers component is a React functional component used for showing
 * all the customers in the database
 * @returns {JSX.Element} The JSX code for the AdminTestimonials component.
 */
const AdminCustomers = () => {
  return (
    <StandardCenteredBox>
      <StandardCenteredCard title="Customers">
        <Divider />
        <CardContent>
          <Typography variant="body1">
            A list with all the customers will be added here.
          </Typography>
        </CardContent>
      </StandardCenteredCard>
    </StandardCenteredBox>
  );
};

export default AdminCustomers;
