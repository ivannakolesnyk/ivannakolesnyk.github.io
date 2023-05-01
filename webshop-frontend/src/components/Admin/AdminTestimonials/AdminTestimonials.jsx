import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../Standard_components/Loading";
import { useAuthHeaders } from "../../../hooks/useAuthHeaders";
import InternalError from "../../Standard_components/InternalError";
import { AdminTestimonialsInterface } from "./TestimonialsInterface/AdminTestimonialsInterface";

/**
 *
 * AdminTestimonials is a React functional component that displays testimonials.
 * An edit form will appear below the testimonial cards if a card is clicked.
 * The component allows the user to create, edit, or delete testimonials and uses a
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
    <AdminTestimonialsInterface
      onCardClick={(testimonial) => setSelectedTestimonial(testimonial)}
      testimonials={testimonials}
      onClick={() => setNewTestimonialDialogOpen(true)}
      selectedTestimonial={selectedTestimonial}
      testimonial={setSelectedTestimonial}
      onClose={() => setSelectedTestimonial(null)}
      onSave={(updatedData) => handleUpdate(updatedData)}
      onDelete={handleDelete}
      open={newTestimonialDialogOpen}
      onClose1={() => setNewTestimonialDialogOpen(false)}
      onCreate={handleCreate}
    />
  );
};

export default AdminTestimonials;
