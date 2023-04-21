import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <Box
      textAlign={"center"}
      sx={{ padding: { xs: "14rem 2rem", sm: "14rem 6rem", md: "14rem" } }}
    >
      <Typography variant="h4" sx={{ color: "secondary.main" }} mb={3}>
        Your shopping cart is empty. Why not browse our products?
      </Typography>
      <Button
        component={Link}
        to="/products"
        variant="contained"
        color="primary"
      >
        Browse Products
      </Button>
    </Box>
  );
};

export default CartEmpty;
