import React from "react";
import TitledBox from "../../Standard_components/TitledBox";
import { Box } from "@mui/system";
import TestimonialCards from "./TestimonialCards";
import EditTestimonialForm from "./EditTestimonialForm";
import { Typography } from "@mui/material";
import axios from "axios";

/**
 *
 * AdminTestimonials is a React functional component that displays testimonials.
 * An edit form will appear below the testimonial cards if a card is clicked.
 * The component allows the user to edit or delete testimonials, and uses a
 * confirmation dialog to ensure the user wants to delete a testimonial before
 * performing the action.
 * @returns {JSX.Element} The JSX code for the AdminTestimonials component.
 */
const AdminTestimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = React.useState(null);

  const handleSave = (testimonialId, updatedData) => {
    axios
      .put(`/api/testimonials/${testimonialId}`, updatedData)
      .then((response) => {
        // handle success
      })
      .catch((error) => {
        // handle error
      });
  };

  const handleDelete = (testimonialId) => {
    axios
      .delete(`/api/testimonials/${testimonialId}`)
      .then((response) => {
        // Close the edit form
        setSelectedTestimonial(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
          onSave={(updatedData) =>
            handleSave(selectedTestimonial.testimonial_id, updatedData)
          }
          onDelete={handleDelete}
        />
      )}
    </Box>
  );
};

export default AdminTestimonials;
