import React from "react";
import { Card, CardHeader } from "@mui/material";

/**
 *
 * StandardCenteredCard is a custom React functional component that wraps the Card
 * component from the Material-UI library. This component is designed to render
 * a card with a standard width and a maximum width, making it suitable for
 * various screen sizes. Additionally, the CardHeader is included with a centered title.
 *
 * Props:
 * - children (React.ReactNode): Child elements to be rendered inside the card.
 * - title (string): The title to be displayed in the CardHeader.
 *
 * Usage:
 * ```
 * <StandardCenteredCard title="Your prefered title">
 *   // Your content
 * </StandardCenteredCard>
 * ```
 *
 * @param {Object} props The properties passed to the component.
 * @param {React.ReactNode} props.children The child elements to be rendered inside the card.
 * @param {string} props.title The title to be displayed in the CardHeader.
 * @returns {JSX.Element} The JSX code for the StandardCenteredCard component.
 */
const StandardCenteredCard = ({ children, title }) => (
  <Card
    sx={{
      width: {
        xs: "96%",
        md: "75%",
        lg: "70%",
      },
      maxWidth: "1300px",
    }}
  >
    <CardHeader
      sx={{ color: "secondary.main", textAlign: "center" }}
      title={title}
    />
    {children}
  </Card>
);

export default StandardCenteredCard;
