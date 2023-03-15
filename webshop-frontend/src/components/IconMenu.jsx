import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Menu } from "@mui/material";

/**
 *
 * @param {Array} menuItems JSON array of menu items Which CAN NOT be empty. The objects should include
 * a name property and icon property and the icon property should be a valid React component.
 * @param {Element} anchorEl The current anchor element of the menu.
 * @param {Function} setAnchorEl A function which changes the current anchor element of the menu.
 *
 * @returns IconMenu menu with the given menu items.
 */
const IconMenu = ({ menuItems, anchorEl, setAnchorEl }) => {
  return (
    <Menu
      id="menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
    >
      {menuItems.map(({ name, icon: Icon }, index) => (
        <MenuItem key={index}>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText>{name}</ListItemText>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default IconMenu;
