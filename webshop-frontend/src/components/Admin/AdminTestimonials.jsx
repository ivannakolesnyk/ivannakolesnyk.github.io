import React from "react";
import { CardContent, Divider, Typography } from "@mui/material";
import StandardCenteredBox from "../Standard_components/StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";

/**
 *
 * The AdminTestimonials component is a React functional component used for displaying
 * the orders a user has made.
 * @returns {JSX.Element} The JSX code for the AdminTestimonials component.
 */
const AdminTestimonials = () => {
  return (
    <StandardCenteredBox>
      <StandardCenteredCard title="Testimonials">
        <Divider />
        <CardContent>
          <Typography variant="body1">
            Testimonials and option to change them will show here.
          </Typography>
        </CardContent>
      </StandardCenteredCard>
    </StandardCenteredBox>
  );
};

export default AdminTestimonials;
