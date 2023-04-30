import { Button, ListItem, ListItemText } from "@mui/material";

/**
 * The MenuItem component is a single menu item that can be clicked to scroll to a specific section.
 *
 * @component
 * @param {Object} props
 * @param {string} props.item - The text content of the menu item.
 * @param {function} props.onClick - The function to handle the click event on the menu item.
 */

const MenuItem = ({ item, onClick }) => {
  return (
    <ListItem
      component="li"
      sx={{
        padding: 0,
        width: "auto",
      }}
    >
      <Button sx={{ padding: 0 }} onClick={onClick} aria-label={item}>
        <ListItemText
          primary={item.toUpperCase()}
          sx={{ padding: 0, color: "primary.contrastText" }}
        />
      </Button>
    </ListItem>
  );
};

export default MenuItem;
