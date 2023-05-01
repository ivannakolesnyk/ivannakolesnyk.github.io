import React, { useState } from "react";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/**
 *
 * The Carousel component is a React functional component that displays a
 * collection of items in a carousel layout. Users can navigate through the
 * items using the provided left and right arrows. The component supports
 * both finite and infinite scrolling, allowing for seamless navigation
 * between the first and last items. This component is useful for showcasing
 * a series of related content, such as testimonials, images, or featured products.
 * @param {Object} props - The properties passed to the component.
 * @param {JSX.Element[]} props.items - The array of JSX elements to be displayed in the carousel.
 * @param {boolean} [props.infinite] - A flag that enables infinite scrolling through the carousel items.
 * @param {string} [props.height] - The height of the carousel.
 * @returns {JSX.Element} The JSX code for the Carousel component.
 */
const Carousel = (props) => {
  const [current, setCurrent] = useState(0);

  const handleLeft = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else if (props.infinite) {
      setCurrent(props.items.length - 1);
    }
  };

  const handleRight = () => {
    if (current < props.items.length - 1) {
      setCurrent(current + 1);
    } else if (props.infinite) {
      setCurrent(0);
    }
  };

  return (
    <>
      <Stack
        component="section"
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        height={props.height || undefined}
        aria-label="carousel"
      >
        <IconButton
          onClick={handleLeft}
          disabled={props.infinite ? false : current === 0}
          aria-label="previous slide"
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Stack component="article" alignItems={"center"}>
          {props.items[current]}
        </Stack>
        <IconButton
          onClick={handleRight}
          disabled={props.infinite ? false : current === props.items.length - 1}
          aria-label="next slide"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </>
  );
};

export default Carousel;
