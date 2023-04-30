import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchBar from "../Products/Controls/SearchBar";

/**
 * Displays the heading, description, and search bar in the menu section.
 *
 * @component
 * @param {Object} props
 * @param {function} props.onSearchChange - The function to handle search input changes.
 */

const MenuHeader = ({ onSearchChange }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: {
          xs: "3.2rem 2rem",
          md: "6.4rem 13.2rem",
        },
        bgcolor: theme.palette.primary.main,
      }}
    >
      <Box component="header" aria-labelledby="menu-heading">
        <Box
          sx={{
            color: theme.palette.primary.contrastText,
            width: {
              md: "70%",
              lg: "50%",
            },
          }}
        >
          <Typography id="menu-heading" variant="h1" mb={"2rem"}>
            Menu
          </Typography>
          <Typography variant="body1" mb={"2rem"}>
            Indulge in the rich flavors of our handcrafted coffee creations -
            One sip, and you'll be hooked!
          </Typography>
          <SearchBar onSearchChange={onSearchChange} />
        </Box>
      </Box>
    </Box>
  );
};

export default MenuHeader;
