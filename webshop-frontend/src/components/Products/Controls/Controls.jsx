/**
 * @file Represents the Controls component, which is responsible for displaying the sort and search
 * controls to the user.
 * @module Controls
 */

import { Box, Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import IconMenu from "./IconMenu";
import SearchBar from "./SearchBar";
import MobileCategory from "../Category/MobileCategory";
import React from "react";

/**
 * Controls component that displays the sort and search controls.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.buttonStyles - The styles for the sort button.
 * @param {Array} props.sortButtonMenu - The sort button menu items.
 * @param {React.Element} props.sortAnchorEl - The anchor element for the sort menu.
 * @param {function} props.sortSetAnchorEl - Callback function for setting the sort menu anchor element.
 * @param {function} props.handleSort - Callback function for handling the sort action.
 * @param {boolean} props.isBigScreen - Whether the current screen size is considered big.
 * @param {function} props.onCategoryClick - Callback function for when a category is clicked.
 * @returns {React.Element} The Controls component.
 */
export const Controls = ({
  buttonStyles,
  sortButtonMenu,
  sortAnchorEl,
  sortSetAnchorEl,
  handleSort,
  isBigScreen,
  onSearchChange,
}) => {
  return (
    <>
      <Stack
        direction={"row"}
        columnGap={"1rem"}
        sx={{
          marginBottom: { xs: "1rem", sm: "1rem", md: "3.2rem" },
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          aria-haspopup="true"
          aria-controls="menu"
          sx={buttonStyles}
          onClick={(event) => {
            sortSetAnchorEl(event.currentTarget);
          }}
        >
          <FilterListIcon sx={{ paddingRight: "0.5rem" }} />
          <Typography variant="button">Sort</Typography>
        </Button>
        <IconMenu
          menuItems={sortButtonMenu}
          anchorEl={sortAnchorEl}
          setAnchorEl={sortSetAnchorEl}
          handleSort={handleSort}
        />

        <SearchBar onSearchChange={onSearchChange} />
      </Stack>

      {!isBigScreen ? (
        <Box mb={1}>
          <MobileCategory />
        </Box>
      ) : null}
    </>
  );
};
