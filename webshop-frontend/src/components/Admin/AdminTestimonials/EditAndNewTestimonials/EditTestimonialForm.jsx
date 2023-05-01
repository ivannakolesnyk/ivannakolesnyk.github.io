import React, { useEffect, useState } from "react";
import { Box, Button, Dialog, DialogTitle, Grid } from "@mui/material";
import useFirebaseStorage from "../../../../hooks/useFirebaseStorage";
import TestimonialForm from "./TestimonialForm";

/**
 *
 * EditTestimonialForm is a React functional component that displays a form for editing or deleting a testimonial.
 * The component uses state to manage the form's input fields and provide validation.
 * The form contains fields for the testimonial's name, image URL, comment, and rating.
 * The component allows the user to delete the testimonial and uses a confirmation dialog to ensure the user wants to perform the action.
 * @param {object} testimonial - The testimonial object to be edited or deleted.
 * @param {function} onClose - The function to be called when the form is closed.
 * @param {function} onSave - The function to be called when the user saves changes to the testimonial.
 * @param {function} onDelete - The function to be called when the user deletes the testimonial.
 * @returns {JSX.Element} The JSX code for the EditTestimonialForm component.
 */
const EditTestimonialForm = ({
  open,
  testimonial,
  setTestimonial,
  onClose,
  onSave,
  onDelete,
}) => {
  const [name, setName] = useState("");
  const [testimonial_image, setTestimonialImage] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(null);

  const { uploadImageToCloudService } = useFirebaseStorage();

  const handleImageUpload = async (file) => {
    const imgRef = `images/testimonials/${file.name}`;

    if (!file) return;

    try {
      const imageUrl = await uploadImageToCloudService(file, imgRef);

      // Update the form data with the image URL.
      setTestimonialImage(imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    setName(testimonial.name || "");
    setTestimonialImage(testimonial.testimonial_image || "");
    setDescription(testimonial.description || "");
    setRating(testimonial.rating || null);
  }, [testimonial]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ name, testimonial_image, description, rating });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      aria-labelledby="edit-testimonial-dialog"
      sx={{ mt: 1, mb: 4 }}
    >
      <DialogTitle id="edit-testimonial-dialog">Edit Testimonial</DialogTitle>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ p: 3 }}
        aria-label="edit-testimonial-form"
      >
        <Box>
          <TestimonialForm
            testimonial={{ name, testimonial_image, description, rating }}
            handleImageUpload={handleImageUpload}
            onChange={handleChange}
            onRatingChange={handleRatingChange}
          />
          <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
            <Button
              variant="contained"
              onClick={onClose}
              sx={{
                mr: 1,
                mb: 1,
              }}
              aria-label="cancel-edit"
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to delete this testimonial?"
                  )
                ) {
                  onDelete(testimonial.id);
                }
              }}
              sx={{ mr: 1, mb: 1 }}
              aria-label="delete-testimonial"
            >
              Delete
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ mr: 1, mb: 1 }}
              aria-label="save-testimonial"
            >
              Save
            </Button>
          </Grid>
        </Box>
      </Box>
    </Dialog>
  );
};

export default EditTestimonialForm;
