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

const NewTestimonialDialog = ({ open, onClose, onCreate }) => {
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    image_url: "",
    comment: "",
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
    setNewTestimonial({ name: "", image_url: "", comment: "", rating: 0 });
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
          name="image_url"
          value={newTestimonial.image_url}
          onChange={handleChange}
          helperText="Example: /assets/img/testimonials/example.png"
        />
        <TextField
          fullWidth
          label="Comment"
          name="comment"
          value={newTestimonial.comment}
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
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            color: "secondary.main",
            borderColor: "primary.main",
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={
            !newTestimonial.name ||
            !newTestimonial.image_url ||
            !newTestimonial.comment ||
            !newTestimonial.rating
          }
        >
          Create Testimonial
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewTestimonialDialog;
