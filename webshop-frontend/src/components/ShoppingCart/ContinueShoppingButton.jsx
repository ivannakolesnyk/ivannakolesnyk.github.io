import { Button } from "@mui/material";

const ContinueShoppingButton = ({ onClick }) => {
  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={onClick}
      sx={{ mr: 1 }}
      aria-label="Continue shopping"
    >
      Continue Shopping
    </Button>
  );
};

export default ContinueShoppingButton;
