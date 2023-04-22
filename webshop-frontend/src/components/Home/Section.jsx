import React from "react";
import PropTypes from "prop-types";
import { Chip, Grid, Stack, Typography } from "@mui/material";

const Section = (props) => {
  return (
    <>
      <Grid
        container
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
            <Stack mb={16} width={"100%"} alignItems={"center"}>
              <Chip
                label={
                  <Typography variant={"body2"} p={1} fontWeight={5400}>
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
