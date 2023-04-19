import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Rating,
  CardActionArea,
} from "@mui/material";

const TestimonialCard = ({
  name,
  image_url,
  comment,
  rating,
  onCardClick,
  testimonial,
}) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea onClick={() => onCardClick(testimonial)}>
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
      </CardActionArea>
    </Card>
  );
};

export default TestimonialCard;
