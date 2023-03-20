import React from "react";
import { Card } from "@mui/material";

/**
 * StandardCenteredCard is a custom React functional component that wraps the Card
 * component from the Material-UI library. This component is designed to render
 * a card with a standard width and a maximum width, making it suitable for
 * various screen sizes.
 *
 * It accepts a single 'children' prop which contains the child elements to be
 * rendered inside the card.
 * @returns {JSX.Element} The JSX code for the StandardCenteredCard component.
 */
const StandardCenteredCard = ({ children }) => (
  <Card sx={{ width: "50%", maxWidth: "700px" }}>{children}</Card>
);

export default StandardCenteredCard;
