import React from "react";
import Box from "@mui/material/Box";
import TestimonialCard from "./TestimonialCard";

/**
 *
 * TestimonialCards is a React functional component that displays testimonial cards.
 * It uses an array of testimonials to render each card with testimonial information.
 * The component takes a prop of onCardClick function that will be triggered when a card is clicked.
 * @param {function} onCardClick - A function that triggers when a card is clicked.
 * @returns {JSX.Element} The JSX code for the TestimonialCards component.
 */
const TestimonialCards = ({ onCardClick, testimonials }) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      aria-label="testimonial-cards"
    >
      {testimonials?.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
          name={testimonial.name}
          image_url={`${testimonial.testimonial_image}`}
          comment={testimonial.description}
          rating={testimonial.rating}
          onCardClick={() => onCardClick(testimonial)}
        />
      ))}
    </Box>
  );
};

export default TestimonialCards;
