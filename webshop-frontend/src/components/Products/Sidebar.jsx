import { Grid } from "@mui/material";
import Category from "./Category";
import React from "react";

export const Sidebar = ({ isBigScreen, onCategoryClick }) => {
  if (!isBigScreen) return null;
  return (
    <Grid item sm={12} md={2.5} lg={2} xl={1.7} p={4}>
      <Category onCategoryChange={onCategoryClick} />
    </Grid>
  );
};
