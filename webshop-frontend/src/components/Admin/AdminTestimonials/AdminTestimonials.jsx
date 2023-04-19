import React from "react";
import TitledBox from "../../Standard_components/TitledBox";
import { Box } from "@mui/system";
import TestimonialCards from "./TestimonialCards";

/**
 *
 * The AdminTestimonials component is a React functional component used for displaying
 * and changing the front page testimonials
 * @returns {JSX.Element} The JSX code for the AdminTestimonials component.
 */
const AdminTestimonials = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <TitledBox title="Testimonials" titleAlignment="center" />
      <TestimonialCards />
    </Box>
  );
};

export default AdminTestimonials;
