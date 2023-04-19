import React from "react";
import TitledBox from "../../Standard_components/TitledBox";
import { Box } from "@mui/system";
import TestimonialCards from "./TestimonialCards";
import EditTestimonialForm from "./EditTestimonialForm";
import { Typography } from "@mui/material";

const AdminTestimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = React.useState(null);

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <TitledBox title="Testimonials" titleAlignment="center" />
      <Typography
        variant="body1"
        sx={{
          color: "secondary.main",
          textAlign: "center",
        }}
      >
        Click on a testimonial card to edit or delete it in an edit form below
        the cards.
      </Typography>
      <TestimonialCards
        onCardClick={(testimonial) => setSelectedTestimonial(testimonial)}
      />
      {selectedTestimonial && (
        <EditTestimonialForm
          testimonial={selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
        />
      )}
    </Box>
  );
};

export default AdminTestimonials;
