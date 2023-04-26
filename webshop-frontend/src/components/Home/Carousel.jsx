/* import { ReactNode, useState } from "react";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  items: ReactNode[];
  height?: number | string;
  infinite?: boolean;
}

export default function Carousel(props: Props) {
  const [current, setCurrent] = useState<number>(0);

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
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        height={props.height || undefined}
      >
        <IconButton
          onClick={handleLeft}
          disabled={props.infinite ? false : current === 0}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Stack alignItems={"center"}>{props.items[current]}</Stack>
        <IconButton
          onClick={handleRight}
          disabled={props.infinite ? false : current === props.items.length - 1}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </>
  );
} */

import React, { useState } from "react";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
