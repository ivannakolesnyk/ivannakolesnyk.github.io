import React from "react";
import Box from "@mui/material/Box";
import TestimonialCard from "./TestimonialCard";
import testimonials from "./dummytestimonials";

const TestimonialCards = ({ onCardClick }) => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.testimonial_id}
          testimonial={testimonial}
          name={testimonial.name}
          image_url={testimonial.image_url}
          comment={testimonial.comment}
          rating={testimonial.rating}
          onCardClick={() => onCardClick(testimonial)}
        />
      ))}
    </Box>
  );
};

export default TestimonialCards;
