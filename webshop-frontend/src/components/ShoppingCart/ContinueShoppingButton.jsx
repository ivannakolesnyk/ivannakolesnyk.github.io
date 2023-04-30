import { Button } from "@mui/material";

/**
 * Renders a button to continue shopping.
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.onClick - The callback function to handle the button click event.
 * @returns {React.Element} - The ContinueShoppingButton component.
 */
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
