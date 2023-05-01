import React from "react";
import { Chip, Grid, Stack, Typography } from "@mui/material";

/**
 *
 * The Section component is a versatile and reusable React functional component
 * for creating visually consistent sections within a webpage. It supports
 * customization of background color, background images, height, and content
 * positioning. The component also includes an optional label that can be used
 * as a section header. This component is designed to provide a consistent layout
 * and styling for various sections across the site, making it easier to maintain
 * and update the design.
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.height] - The height of the section.
 * @param {string} [props.bgColor] - The background color of the section.
 * @param {string} [props.backgroundUrl] - The URL of the background image for the section.
 * @param {string} [props.backgroundUrlMobile] - The URL of the mobile-specific background image for the section.
 * @param {string} [props.ariaLabel] - The ARIA label for the section for accessibility purposes.
 * @param {Object} [props.sx] - Additional Material-UI sx props for styling the section.
 * @param {string} [props.label] - The optional label text for the section header.
 * @param {JSX.Element[]} [props.children] - The child components to be rendered within the section.
 * @returns {JSX.Element} The JSX code for the Section component.
 */
const Section = (props) => {
  return (
    <>
      <Grid
        container
        component="section"
        sx={{
          height: props.height || undefined,
          backgroundColor: props.bgColor || undefined,
          justifyContent: "center",
          backgroundImage: {
            xs: `url(${
              props.backgroundUrlMobile || props.backgroundUrl || undefined
            })`,
            md: `url(${props.backgroundUrl || undefined})`,
          },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        aria-label={props.ariaLabel || undefined}
      >
        <Grid
          item
          container
          sx={{
            maxWidth: "lg",
            height: "100%",
            mx: 8,
            my: 16,
            ...props.sx,
          }}
        >
          {props.label && (
            <Stack
              component="header"
              mb={16}
              width={"100%"}
              alignItems={"center"}
            >
              <Chip
                label={
                  <Typography
                    component="h2"
                    variant={"body2"}
                    p={1}
                    fontWeight={5400}
                  >
                    {props.label}
                  </Typography>
                }
              />
            </Stack>
          )}
          {props.children}
        </Grid>
      </Grid>
    </>
  );
};

export default Section;
