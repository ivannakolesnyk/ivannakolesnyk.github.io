import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import React, { forwardRef } from "react";

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
        sx={{
          padding: "6.4rem 13.2rem",
        }}
        ref={sectionRef}
      >
        <Typography variant="h2" mb={"2rem"} color="primary.contrastText">
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
