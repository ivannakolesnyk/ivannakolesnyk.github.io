import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";

/**
 *
 * TestimonialCard is a React functional component that displays a single testimonial as a Material-UI Card.
 * The component displays the name of the testimonial author, their picture, their rating, and their comment.
 * If the card is clicked, it triggers the onCardClick callback passed down from the parent component, allowing
 * the user to edit or delete the testimonial.
 * @param {string} name The name of the testimonial author.
 * @param {string} image_url The URL of the testimonial author's picture.
 * @param {string} comment The comment left by the testimonial author.
 * @param {number} rating The rating left by the testimonial author.
 * @param {function} onCardClick The callback function to trigger when the card is clicked.
 * @param {object} testimonial The testimonial object containing all of the above properties, passed down from the parent component.
 * @returns {JSX.Element} The JSX code for the TestimonialCard component.
 */
const TestimonialCard = ({
  name,
  image_url,
  comment,
  rating,
  onCardClick,
  testimonial,
}) => {
  return (
    <Box sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea onClick={() => onCardClick(testimonial)}>
        <Card>
          <CardContent>
            <Box display="flex" justifyContent="center">
              <Avatar
                alt={name}
                src={image_url}
                sx={{
                  width: 140,
                  height: 140,
                  borderWidth: 1,
                  borderColor: "primary.main",
                }}
              />
            </Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
            >
              {name}
            </Typography>
            <Rating value={rating} readOnly />
            <Typography variant="body2" color="text.secondary">
              {comment}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Box>
  );
};

export default TestimonialCard;
