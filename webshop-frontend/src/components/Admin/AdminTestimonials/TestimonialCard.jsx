import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { Rating } from "@mui/lab";

const TestimonialCard = ({ name, image_url, comment, rating }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
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
  );
};

export default TestimonialCard;
