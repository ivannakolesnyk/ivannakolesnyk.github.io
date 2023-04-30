import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import React, { forwardRef } from "react";

/**
 * Represents a section within the menu, displaying the heading,
 * menu items, and a "View All" button for that category.
 *
 * @component
 * @param {Object} props
 * @param {string} props.name - The name of the category.
 * @param {Array} props.products - The array of products within the category.
 * @param {string|null} props.expandedCategory - The currently expanded category, if any.
 * @param {function} props.handleViewAllClick - The function to handle the "View All" button click event.
 * @param {function} props.renderMenuItems - The function responsible for rendering menu items.
 */

const MenuSection = forwardRef(
  (
    { name, products, expandedCategory, handleViewAllClick, renderMenuItems },
    sectionRef
  ) => {
    const theme = useTheme();
    const buttonStyles = {
      borderRadius: "1.2rem",
      padding: "1.2rem 2.4rem",
      color: theme.palette.secondary.main,
    };

    return (
      <Box
        component="section"
        sx={{
          padding: {
            xs: "5.2rem 2rem",
            lg: "5.2rem 4rem",
          },
        }}
        ref={sectionRef}
      >
        <Typography
          variant="h2"
          mb={"2rem"}
          color="primary.contrastText"
          component="header"
          aria-label={`${name} section`}
        >
          {name}
        </Typography>
        {renderMenuItems()}
        <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
          {expandedCategory !== name && (
            <Button
              variant="outlined"
              color="secondary"
              sx={buttonStyles}
              onClick={() => handleViewAllClick(name)}
            >
              <Typography
                variant="button"
                sx={{ borderBottom: ".2rem solid #1F3A33" }}
              >
                {`VIEW ALL(${
                  products.length - 3 > 0 ? products.length - 3 : 0
                })`}
              </Typography>
            </Button>
          )}
        </Box>
      </Box>
    );
  }
);

export default MenuSection;
