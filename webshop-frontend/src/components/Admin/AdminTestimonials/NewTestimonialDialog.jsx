// NewTestimonialDialog.jsx
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Rating from "@mui/material/Rating";

/**
 *
 * NewTestimonialDialog is a React functional component that renders a dialog
 * for creating a new testimonial. It allows the user to input the name,
 * image URL, comment, and rating for a new testimonial.
 * @param {Object} props - The component's props
 * @param {boolean} props.open - Determines if the dialog is open or closed
 * @param {function} props.onClose - A function to close the dialog
 * @param {function} props.onCreate - A function to create a new testimonial
 * @returns {JSX.Element} The rendered NewTestimonialDialog component
 */
const NewTestimonialDialog = ({ open, onClose, onCreate }) => {
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    testimonial_image: "",
    description: "",
    rating: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleRatingChange = (event, newValue) => {
    setNewTestimonial({ ...newTestimonial, rating: newValue });
  };

  const handleSubmit = () => {
    onCreate(newTestimonial);
    setNewTestimonial({ name: "", testimonial_image: "", description: "", rating: 0 });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Testimonial</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={newTestimonial.name}
          onChange={handleChange}
          margin="normal"
          helperText="Example: Christine 33"
        />
        <TextField
          fullWidth
          label="Image URL"
          name="testimonial_image"
          value={newTestimonial.testimonial_image}
          onChange={handleChange}
          helperText="Example: /assets/img/testimonials/example.png"
        />
        <TextField
          fullWidth
          label="Comment"
          name="description"
          value={newTestimonial.description}
          onChange={handleChange}
          multiline
          rows={4}
        />
        <Rating
          name="rating"
          value={newTestimonial.rating}
          onChange={handleRatingChange}
          precision={1}
          size="large"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={
            !newTestimonial.name ||
            !newTestimonial.testimonial_image ||
            !newTestimonial.description ||
            !newTestimonial.rating
          }
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewTestimonialDialog;
