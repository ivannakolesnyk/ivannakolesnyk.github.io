import SearchIcon from "@mui/icons-material/Search";
import { Icon, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SearchBar = () => {
  return (
    <Box
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        flexGrow: "1",
        borderRadius: "1.2rem",
        border: "1px solid #1F3A33",
      }}
    >
      <Icon sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </Icon>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search a product"
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Box>
  );
};

export default SearchBar;
