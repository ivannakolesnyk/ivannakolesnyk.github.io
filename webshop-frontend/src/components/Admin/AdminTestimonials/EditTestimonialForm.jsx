import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  FormLabel,
  FormGroup,
  Rating,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const EditTestimonialForm = ({ testimonial, onClose }) => {
  const [name, setName] = useState(testimonial.name);
  const [imageUrl, setImageUrl] = useState(testimonial.image_url);
  const [comment, setComment] = useState(testimonial.comment);
  const [rating, setRating] = useState(testimonial.rating);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the testimonial data in the database
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: "80%" },
        mx: "auto",
        mt: 1,
        mb: 4,
      }}
    >
      <CardContent>
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
              variant="outlined"
              onClick={onClose}
              sx={{
                mr: 1,
                color: "secondary.main",
                borderColor: "primary.main",
              }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Save Changes
            </Button>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EditTestimonialForm;
