import React from "react";
import {
  FormControl,
  FormGroup,
  FormLabel,
  Grid,
  Rating,
  TextField,
} from "@mui/material";
import ImageFileInput from "../../Standard_components/ImageFileInput";


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
