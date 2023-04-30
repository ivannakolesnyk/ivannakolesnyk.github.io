import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

/**
 * Renders a message and a button to browse products when the cart is empty.
 * @returns {React.Element} - The CartEmpty component.
 */
const CartEmpty = () => {
  return (
    <Box
      component="section"
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
        aria-label="Browse Products"
      >
        Browse Products
      </Button>
    </Box>
  );
};

export default CartEmpty;
