import { Box, Divider, Paper } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import CartEmpty from "./CartEmpty";
import CartTable from "./CartTable";
import Subtotal from "./Subtotal";
import useFetch from "../../hooks/useFetch";
import styles from "./styles";
import ContinueShoppingButton from "./ContinueShoppingButton";
import OrderNowButton from "./OrderNowButton";
import CustomSnackbar from "../Standard_components/CustomSnackbar";

function ShoppingCart() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const { getJwtPayload } = useContext(AuthContext);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

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
      setSnackbarOpen(true);
    }
  }, [data, error]);

  const transformCartItems = (cartItems) =>
    cartItems.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
    }));

  const handleOrderNow = () => {
    const userEmail = getJwtPayload().sub;

    refetch({
      cart: transformCartItems(cart),
      userId: userEmail,
    });
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  const handleSnackbarClose = () => setSnackbarOpen(false);

  if (cart.length === 0) {
    return <CartEmpty />;
  }

  return (
    <>
      <Box sx={styles.ShoppingCartSection}>
        <Paper elevation={3} sx={styles.TableContainer}>
          <CartTable />
          <Divider sx={{ my: 2 }} />
          <Subtotal />
        </Paper>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <ContinueShoppingButton onClick={handleContinueShopping} />
          <OrderNowButton onClick={handleOrderNow} isLoading={isLoading} />
        </Box>
      </Box>
      <CustomSnackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message="Failed to create checkout session"
        severity="error"
      />
    </>
  );
}

export default ShoppingCart;
