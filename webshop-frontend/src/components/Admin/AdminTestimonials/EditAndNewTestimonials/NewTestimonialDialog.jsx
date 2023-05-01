// NewTestimonialDialog.jsx
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import useFirebaseStorage from "../../../../hooks/useFirebaseStorage";
import TestimonialForm from "./TestimonialForm";

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

  const { uploadImageToCloudService } = useFirebaseStorage();

  const handleImageUpload = async (file) => {
    const imgRef = `images/testimonials/${file.name}`;

    if (!file) return;

    try {
      const imageUrl = await uploadImageToCloudService(file, imgRef);

      // Update the form data with the image URL.
      setNewTestimonial({ ...newTestimonial, testimonial_image: imageUrl });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleRatingChange = (event, newValue) => {
    setNewTestimonial({ ...newTestimonial, rating: newValue });
  };

  const handleSubmit = () => {
    onCreate(newTestimonial);
    setNewTestimonial({
      name: "",
      testimonial_image: "",
      description: "",
      rating: 0,
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Testimonial</DialogTitle>
      <DialogContent>
        <TestimonialForm
          testimonial={newTestimonial}
          handleImageUpload={handleImageUpload}
          onChange={handleChange}
          onRatingChange={handleRatingChange}
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
