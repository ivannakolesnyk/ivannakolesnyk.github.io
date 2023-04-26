/**
 * @file Represents the PromoMessage component, which is responsible for displaying a promotional
 * message to the user.
 * @module PromoMessage
 */

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

/**
 * PromoMessage component that displays a promotional message to the user.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.theme - The theme object from Material-UI.
 * @returns {React.Element} The PromoMessage component.
 */
export const PromoMessage = ({ theme }) => {
  return (
    <Box
      component="aside"
      aria-label="promotional message"
      sx={{
        backgroundColor: "primary.main",
        color: theme.palette.primary.contrastText,
        padding: "10px",
        borderRadius: "8px",
        textAlign: "center",
        justifySelf: "center",
        margin: "0 auto",
        marginBottom: "0.8rem",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "1.4rem",
            sm: "1.6rem",
            md: "1.8rem",
            lg: "2rem",
            xl: "2.2rem",
          },
        }}
      >
        Awaken your senses with every sip - Experience the perfect cup of coffee
        with us!
      </Typography>
    </Box>
  );
};
