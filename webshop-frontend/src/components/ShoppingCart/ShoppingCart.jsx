import { Box, Button, CircularProgress, Divider, Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import CartEmpty from "./CartEmpty";
import CartTable from "./CartTable";
import Subtotal from "./Subtotal";
import useFetch from "../../hooks/useFetch";

function ShoppingCart() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const { getJwtPayload } = useContext(AuthContext);

  const handleContinueShopping = () => {
    navigate("/products");
  };

  const { data, isLoading, error, refetch } = useFetch(
    "POST",
    "create-checkout-session",
    null,
    null,
    null,
    false
  );

  useEffect(() => {
    if (data && data.url) {
      window.location = data.url;
    } else if (error) {
      console.error("Failed to create checkout session");
    }
  }, [data, error]);

  const handleOrderNow = () => {
    const userEmail = getJwtPayload().sub;

    refetch({
      cart: cart.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      })),
      userId: userEmail,
    });
  };

  if (cart.length === 0) {
    return <CartEmpty />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        mt: 4,
        padding: "3.6rem 0 6.4rem 0",
        "& .MuiTableCell-root": {
          color: "secondary.main",
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "80%",
          bgcolor: "white",
          borderRadius: 2,
          p: 2,
          color: "secondary.main",
        }}
      >
        <CartTable />
        <Divider sx={{ my: 2 }} />
        <Subtotal />
      </Paper>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleContinueShopping}
          sx={{ mr: 1 }}
        >
          Continue Shopping
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOrderNow}
          disabled={isLoading}
          sx={{ width: "14rem", height: "4rem" }}
        >
          {isLoading ? <CircularProgress size={24} /> : "Order Now"}
        </Button>
      </Box>
    </Box>
  );
}

export default ShoppingCart;
