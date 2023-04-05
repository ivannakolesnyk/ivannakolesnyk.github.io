import { Box, Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import IconMenu from "./IconMenu";
import SearchBar from "../SearchBar";
import MobileCategory from "./MobileCategory";
import React from "react";

export const Controls = ({
  buttonStyles,
  sortButtonMenu,
  sortAnchorEl,
  sortSetAnchorEl,
  handleSort,
  isBigScreen,
  onCategoryClick,
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

        <SearchBar />
      </Stack>

      {!isBigScreen ? (
        <Box mb={1}>
          <MobileCategory onCategoryChange={onCategoryClick} />
        </Box>
      ) : null}
    </>
  );
};
