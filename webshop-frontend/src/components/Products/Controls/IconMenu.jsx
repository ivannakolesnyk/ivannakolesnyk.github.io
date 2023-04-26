import { Menu } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

/**
 *
 * @param {Array} menuItems JSON array of menu items Which CAN NOT be empty. The objects should include
 * a name property and icon property and the icon property should be a valid React component.
 * @param {Element} anchorEl The current anchor element of the menu.
 * @param {Function} setAnchorEl A function which changes the current anchor element of the menu.
 *
 * @returns IconMenu menu with the given menu items.
 */
const IconMenu = ({ menuItems, anchorEl, setAnchorEl, handleSort }) => {
  return (
    <Menu
      id="menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
      aria-label="sort options"
    >
      {menuItems.map(({ name, icon: Icon }, index) => (
        <MenuItem
          key={index}
          onClick={() => {
            name === "Descending" ? handleSort("desc") : handleSort("asc");
            setAnchorEl(null);
          }}
          aria-label={`Sort products by ${name.toLowerCase()}`}
        >
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
