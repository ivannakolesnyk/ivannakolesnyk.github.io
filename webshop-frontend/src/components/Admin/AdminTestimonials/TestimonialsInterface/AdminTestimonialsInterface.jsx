import { Box, Button, Typography } from "@mui/material";
import TitledBox from "../../../Standard_components/TitledBox";
import TestimonialCards from "../TestimonialCards/TestimonialCards";
import EditTestimonialForm from "../EditAndNewTestimonials/EditTestimonialForm";
import NewTestimonialDialog from "../EditAndNewTestimonials/NewTestimonialDialog";
import React from "react";

/**
 * AdminTestimonialsInterface is a React component that renders the admin interface
 * for managing testimonials. This includes a list of testimonial cards, an edit form
 * for updating testimonials, and a dialog for creating new testimonials.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.onCardClick - A callback function for handling the click event on a testimonial card.
 * @param {Array} props.testimonials - An array of testimonial objects containing testimonial information.
 * @param {Function} props.onClick - A callback function for handling the click event on the "Create New Testimonial" button.
 * @param {Object|null} props.selectedTestimonial - The currently selected testimonial object or null.
 * @param {Function} props.testimonial - A callback function for updating the testimonial.
 * @param {Function} props.onClose - A callback function for handling the close event on the EditTestimonialForm component.
 * @param {Function} props.onSave - A callback function for handling the save event on the EditTestimonialForm component.
 * @param {Function} props.onDelete - A callback function for handling the delete event on the EditTestimonialForm component.
 * @param {boolean} props.open - A boolean value that controls the visibility of the NewTestimonialDialog component.
 * @param {Function} props.onClose1 - A callback function for handling the close event on the NewTestimonialDialog component.
 * @param {Function} props.onCreate - A callback function for handling the create event on the NewTestimonialDialog component.
 * @returns {JSX.Element} The JSX code for the AdminTestimonialsInterface component.
 */
export function AdminTestimonialsInterface(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          p: { xs: 2, md: 4 },
          maxWidth: "100%",
          "@media (min-width: 600px)": {
            maxWidth: "60%",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TitledBox title="Testimonials" titleAlignment="center" />
        <Typography
          variant="body1"
          sx={{
            color: "secondary.main",
            textAlign: "center",
          }}
        >
          Click on a testimonial to edit or delete.
        </Typography>
        <TestimonialCards
          onCardClick={props.onCardClick}
          testimonials={props.testimonials}
        />
        <Box sx={{ textAlign: "center", my: 2 }}>
          <Button variant="contained" color="primary" onClick={props.onClick}>
            Create New Testimonial
          </Button>
        </Box>

        <EditTestimonialForm
          open={!!props.selectedTestimonial}
          testimonial={props.selectedTestimonial || {}}
          setTestimonial={props.testimonial}
          onClose={props.onClose}
          onSave={props.onSave}
          onDelete={props.onDelete}
        />

        <NewTestimonialDialog
          open={props.open}
          onClose={props.onClose1}
          onCreate={props.onCreate}
        />
      </Box>
    </Box>
  );
}
