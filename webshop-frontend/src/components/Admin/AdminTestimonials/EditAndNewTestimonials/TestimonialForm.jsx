import React from "react";
import { FormControl, FormLabel, Grid, Rating, TextField } from "@mui/material";
import ImageFileInput from "../../../Standard_components/ImageFileInput";

/**
 * TestimonialForm component for creating and editing testimonial data.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.testimonial - Testimonial object containing name, testimonial_image, description, and rating
 * @param {function} props.handleImageUpload - Callback function to handle image upload for the testimonial
 * @param {function} props.onChange - Callback function to handle changes in text fields (name and description)
 * @param {function} props.onRatingChange - Callback function to handle changes in the Rating component
 * @returns {React.Element} TestimonialForm component with input fields for name, testimonial image, description, and rating
 */
const TestimonialForm = ({
  testimonial,
  handleImageUpload,
  onChange,
  onRatingChange,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          value={testimonial.name}
          label="Name"
          name="name"
          fullWidth
          onChange={onChange}
          required
        />
      </Grid>

      <Grid item xs={12}>
        <ImageFileInput
          handleImageUpload={handleImageUpload}
          value={testimonial.testimonial_image}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          value={testimonial.description}
          label="Comment"
          name="description"
          onChange={onChange}
          required
          fullWidth
          multiline
          rows={4}
        />
      </Grid>

      <Grid item xs={12}>
        <FormControl>
          <FormLabel>Rating</FormLabel>
          <Rating
            name="rating"
            value={testimonial.rating}
            onChange={onRatingChange}
            required
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default TestimonialForm;
