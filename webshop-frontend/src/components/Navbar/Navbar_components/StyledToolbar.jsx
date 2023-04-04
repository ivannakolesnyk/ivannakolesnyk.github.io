import { styled, Toolbar } from "@mui/material";

/**
The StyledToolbar component is a styled version of the MUI Toolbar component.
It is used to display the Navbar's contents in a way that is visually
appealing and responsive to different screen sizes.
*/
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  color: "secondary",
}));

export default StyledToolbar;
