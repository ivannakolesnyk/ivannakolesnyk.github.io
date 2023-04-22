import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  FormGroup,
  FormLabel,
  Grid,
  Rating,
  TextField,
} from "@mui/material";

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
  onClose,
  onSave,
  onDelete,
}) => {
  const [name, setName] = useState(testimonial.name);
  const [imageUrl, setImageUrl] = useState(testimonial.image_url);
  const [comment, setComment] = useState(testimonial.comment);
  const [rating, setRating] = useState(testimonial.rating);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ name, imageUrl, comment, rating });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{ mt: 1, mb: 4 }}
    >
      <DialogTitle>Edit Testimonial</DialogTitle>
      <Box component="form" onSubmit={handleSubmit} sx={{ p: 3 }}>
        <Box component="form" onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <TextField
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Image URL</FormLabel>
            <TextField
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Comment</FormLabel>
            <TextField
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              required
              multiline
              rows={4}
            />
          </FormGroup>

          <FormControl>
            <FormLabel>Rating</FormLabel>
            <Rating
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
              required
            />
          </FormControl>

          <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
            <Button
              variant="contained"
              onClick={onClose}
              sx={{
                mr: 1,
                mb: 1,
              }}
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
                  onDelete(testimonial.testimonial_id);
                }
              }}
              sx={{ mr: 1, mb: 1 }}
            >
              Delete
            </Button>
            <Button type="submit" variant="contained" sx={{ mr: 1, mb: 1 }}>
              Save
            </Button>
          </Grid>
        </Box>
      </Box>
    </Dialog>
  );
};

export default EditTestimonialForm;
