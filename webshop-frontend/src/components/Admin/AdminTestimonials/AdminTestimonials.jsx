// AdminTestimonials.jsx
import React, { useState } from "react";
import TitledBox from "../../Standard_components/TitledBox";
import { Box, Button, Typography } from "@mui/material";
import TestimonialCards from "./TestimonialCards";
import EditTestimonialForm from "./EditTestimonialForm";
import NewTestimonialDialog from "./NewTestimonialDialog";
import axios from "axios";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../Standard_components/Loading";

/**
 *
 * AdminTestimonials is a React functional component that displays testimonials.
 * An edit form will appear below the testimonial cards if a card is clicked.
 * The component allows the user to create, edit or delete testimonials, and uses a
 * confirmation dialog to ensure the user wants to delete a testimonial before
 * performing the action.
 * @returns {JSX.Element} The JSX code for the AdminTestimonials component.
 */
const AdminTestimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [newTestimonialDialogOpen, setNewTestimonialDialogOpen] =
    useState(false);

  const updateTestimonialFetch = useFetch(
    "PUT",
    `testimonials/${selectedTestimonial?.id}`,
    null,
    null,
    null,
    false
  );
  const handleUpdate = async (testimonial) => {
    await updateTestimonialFetch.refetch(testimonial);
    if (!updateTestimonialFetch.error) {
      setSelectedTestimonial(null);
    }
  };

  const deleteTestimonialFetch = useFetch(
    "DELETE",
    `testimonials/${selectedTestimonial?.id}`,
    null,
    null,
    null,
    false
  );
  const handleDelete = async () => {
    await deleteTestimonialFetch.refetch();
    if (!deleteTestimonialFetch.error) {
      setSelectedTestimonial(null);
    }
  };

  const {
    data: testimonials,
    isLoading,
    error,
  } = useFetch("GET", "testimonials");

  if (isLoading) return <Loading />;

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
        testimonials={testimonials}
      />
      <Box sx={{ textAlign: "center", my: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setNewTestimonialDialogOpen(true)}
        >
          Create New Testimonial
        </Button>
      </Box>
      {selectedTestimonial && (
        <EditTestimonialForm
          testimonial={selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
          onSave={(updatedData) => handleUpdate(updatedData)}
          onDelete={handleDelete}
        />
      )}
      <NewTestimonialDialog
        open={newTestimonialDialogOpen}
        onClose={() => setNewTestimonialDialogOpen(false)}
        onCreate={handleCreate}
      />
    </Box>
  );
};

export default AdminTestimonials;
