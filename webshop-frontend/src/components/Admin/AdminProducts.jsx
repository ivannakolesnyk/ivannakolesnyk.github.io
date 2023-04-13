import React from "react";
import { CardContent, Typography } from "@mui/material";
import StandardCenteredBox from "../Standard_components/StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";

/**
 *
 * The AdminProducts component is a React functional component used for displaying
 * the orders a user has made.
 * @returns {JSX.Element} The JSX code for the AdminProducts component.
 */
const AdminProducts = () => {
  return (
    <StandardCenteredBox>
      <StandardCenteredCard title="Products">
        <CardContent>
          <Typography variant="body1">
            Products and option to change them will appear here.
          </Typography>
        </CardContent>
      </StandardCenteredCard>
    </StandardCenteredBox>
  );
};

export default AdminProducts;
