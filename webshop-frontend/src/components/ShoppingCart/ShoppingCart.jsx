import { Box, Button, CircularProgress, Divider, Paper } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import CartEmpty from "./CartEmpty";
import CartTable from "./CartTable";
import Subtotal from "./Subtotal";

function ShoppingCart() {
  const [isLoading, setIsLoading] = useState(false);

  const { cart } = useCart();
  const navigate = useNavigate();
  const { getJwtPayload } = useContext(AuthContext);

  const handleContinueShopping = () => {
    navigate("/products");
  };

  if (cart.length === 0) {
    return <CartEmpty />;
  }

  const handleOrderNow = async () => {
    setIsLoading(true);
    const userEmail = getJwtPayload().sub;
    try {
      const response = await axios.post(
        "http://localhost:8080/api/create-checkout-session",
        {
          cart: cart.map((item) => ({
            productId: item.product.id,
            quantity: item.quantity,
          })),
          userId: userEmail,
        }
      );

      const { data } = response;
      if (data && data.url) {
        window.location = data.url;
      } else {
        throw new Error("Failed to create checkout session");
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

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
