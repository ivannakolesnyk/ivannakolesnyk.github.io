import { Button, CircularProgress } from "@mui/material";

const OrderNowButton = ({ onClick, isLoading }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={isLoading}
      sx={{ width: "14rem", height: "4rem" }}
    >
      {isLoading ? <CircularProgress size={24} /> : "Order Now"}
    </Button>
  );
};

export default OrderNowButton;
