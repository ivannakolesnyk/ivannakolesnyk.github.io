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
    >
      <Typography variant="h6">Subtotal:</Typography>
      <Typography variant="h6">{`${calculateTotalPrice()} NOK`}</Typography>
    </Box>
  );
};

export default Subtotal;
