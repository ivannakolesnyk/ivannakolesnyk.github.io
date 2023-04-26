import { Button, ListItem, ListItemText } from "@mui/material";

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
