import React, { useState } from "react";
import {
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import Testimonial from "./Testimonial";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const testimonialsData = [
  {
    name: "Sean 25",
    comment:
      "Mocha Nooka Cafe is my favorite spot for a chill, hip atmosphere. The coffee is always on point and the staff are super helpful. A definite must-visit for anyone who's looking for a unique cafe experience!",
  },
  {
    name: "John 65",
    comment:
      "I've been coming to Mocha Nooka Cafe for years and it's never disappointed. The coffee is always freshly brewed and the food is always delicious. It's a great spot for a quick break, or a leisurely chat with friends.",
  },
  {
    name: "Toni 16",
    comment:
      "I love coming to Mocha Nooka Cafe! It's the perfect spot to hang out with friends and enjoy something tasty and refreshing. The atmosphere is always chill and the staff are really friendly. Highly recommended!",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container maxWidth="md">
      <Box textAlign="center" my={8}>
        <Typography variant="h2" color={"secondary"} gutterBottom>
          Testimonials
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton onClick={handlePrevClick}>
          <ArrowBackIos />
        </IconButton>
        <Box sx={{ width: "60%" }}>
          <Card>
            <CardContent>
              <Testimonial {...testimonialsData[activeIndex]} />
            </CardContent>
          </Card>
        </Box>
        <IconButton onClick={handleNextClick}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Testimonials;
