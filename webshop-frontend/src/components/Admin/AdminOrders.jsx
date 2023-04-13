import React from "react";
import { CardContent, Divider, Typography } from "@mui/material";
import StandardCenteredBox from "../Standard_components/StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";

/**
 *
 * The ProfileViewOrders component is a React functional component used for displaying
 * the orders a user has made.
 * @returns {JSX.Element} The JSX code for the AdminViewOrders component.
 */
const AdminOrders = () => {
  return (
    <StandardCenteredBox>
      <StandardCenteredCard title="Orders">
        <Divider />
        <CardContent>
          <Typography variant="body1">
            All orders and option to edit them will appear here.
          </Typography>
        </CardContent>
      </StandardCenteredCard>
    </StandardCenteredBox>
  );
};

export default AdminOrders;
