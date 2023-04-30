import { Button, CircularProgress } from "@mui/material";

/**
 * Renders a button for submitting an order with a loading spinner.
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.onClick - The callback function to handle the button click event.
 * @param {boolean} props.isLoading - The loading state of the order submission process.
 * @returns {React.Element} - The OrderNowButton component.
 */
const OrderNowButton = ({ onClick, isLoading }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={isLoading}
      sx={{ width: "14rem", height: "4rem" }}
      aria-label="Order now"
    >
      {isLoading ? <CircularProgress size={24} /> : "Order Now"}
    </Button>
  );
};

export default OrderNowButton;
