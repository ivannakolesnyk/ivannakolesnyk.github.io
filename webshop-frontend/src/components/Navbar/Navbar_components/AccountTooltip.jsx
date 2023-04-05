import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import React from "react";

/**
 The AccountTooltip component is a custom MUI IconButton that displays a tooltip
 when hovered over. The tooltip displays the text "Account settings".
 The IconButton displays an Avatar component with the letter "S" in it,
 which will be replaced with the first letter of the users first name.
 The component takes in three props: onClick, open, and sx.
 onClick is a function that is called when the button is clicked.
 open is a boolean that is used to control whether the component is open or closed.
 sx is a style object that is passed to the MUI IconButton component.
 @param {object} props - The props object containing the onClick, open, and sx props.
 @param {function} props.onClick - Function to call when the button is clicked.
 @param {boolean} props.open - Indicates whether the component is open or closed.
 @param {object} props.sx - Style object to be passed to the MUI IconButton component.
 @returns {JSX.Element} - The JSX code for the AccountTooltip component.
 */
export function AccountTooltip(props) {
  return (
    <Tooltip title="Account settings">
      <IconButton
        onClick={props.onClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={props.open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={props.open ? "true" : undefined}
      >
        <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
      </IconButton>
    </Tooltip>
  );
}
