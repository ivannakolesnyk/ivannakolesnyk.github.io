import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

/**
 Renders a menu with account settings.
 @param {Object} props - The props object.
 @param {Object} props.anchorEl - The anchor element to position the menu.
 @param {boolean} props.open - Indicates whether the menu is open or not.
 @param {function} props.onClose - The function to call when the menu is closed.
 @param {function} props.onClick - The function to call when the logout button is clicked.
 @returns {JSX.Element} The AccountMenu component.
 */
export function AccountMenu(props) {
  const { getJwtPayload } = useContext(AuthContext);
  return (
    <Menu
      anchorEl={props.anchorEl}
      id="account-menu"
      open={props.open}
      onClose={props.onClose}
      onClick={props.onClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem
        component={Link}
        to={
          getJwtPayload()?.roles.some((role) => role.authority === "ROLE_ADMIN")
            ? "/admin"
            : "/profile"
        }
        onClick={props.onClose}
      >
        <Avatar /> My account
      </MenuItem>
      <MenuItem component={Link} to="/" onClick={props.onClick}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}
