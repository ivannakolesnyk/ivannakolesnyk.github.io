import React, { useState } from "react";
import TitledBox from "../../Standard_components/TitledBox";
import { Box, Button, Typography } from "@mui/material";
import TestimonialCards from "./TestimonialCards";
import EditTestimonialForm from "./EditTestimonialForm";
import NewTestimonialDialog from "./NewTestimonialDialog";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../Standard_components/Loading";
import { useAuthHeaders } from "../../../hooks/useAuthHeaders";
import InternalError from "../../Standard_components/InternalError";

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
  const { headers } = useAuthHeaders();

  const createTestimonialFetch = useFetch(
    "POST",
    "testimonials",
    headers,
    null,
    null,
    false
  );
  const handleCreate = async (testimonial) => {
    await createTestimonialFetch.refetch(testimonial);
    if (!createTestimonialFetch.error) {
      setNewTestimonialDialogOpen(false);
      setSelectedTestimonial(null);
      refetchTestimonials();
    }
  };

  const updateTestimonialFetch = useFetch(
    "PUT",
    `testimonials/${selectedTestimonial?.id}`,
    headers,
    null,
    null,
    false
  );
  const handleUpdate = async (testimonial) => {
    await updateTestimonialFetch.refetch(testimonial);
    if (!updateTestimonialFetch.error) {
      setSelectedTestimonial(null);
      refetchTestimonials();
    }
  };

  const deleteTestimonialFetch = useFetch(
    "DELETE",
    `testimonials/${selectedTestimonial?.id}`,
    headers,
    null,
    null,
    false
  );
  const handleDelete = async () => {
    await deleteTestimonialFetch.refetch();
    if (!deleteTestimonialFetch.error) {
      setSelectedTestimonial(null);
      refetchTestimonials();
    }
  };

  const {
    data: testimonials,
    isLoading,
    error,
    refetch: refetchTestimonials,
  } = useFetch("GET", "testimonials");

  if (isLoading) return <Loading />;
  if (error) return <InternalError />;

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

        <EditTestimonialForm
          open={!!selectedTestimonial}
          testimonial={selectedTestimonial || {}}
          setTestimonial={setSelectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
          onSave={(updatedData) => handleUpdate(updatedData)}
          onDelete={handleDelete}
        />

        <NewTestimonialDialog
          open={newTestimonialDialogOpen}
          onClose={() => setNewTestimonialDialogOpen(false)}
          onCreate={handleCreate}
        />
      </Box>
    </Box>
  );
};

export default AdminTestimonials;
