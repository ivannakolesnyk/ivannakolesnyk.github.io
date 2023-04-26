import { Box, Typography } from "@mui/material";
import { useCart } from "../../context/CartContext";

const Subtotal = () => {
  const { cart } = useCart();

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{ padding: "0 4rem" }}
      aria-label="Subtotal"
    >
      <Typography variant="h6" component="p">
        Subtotal:
      </Typography>
      <Typography variant="h6" component="p">
        {`${calculateTotalPrice()} NOK`}
      </Typography>
    </Box>
  );
};

export default Subtotal;
