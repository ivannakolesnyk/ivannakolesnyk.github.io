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
import {useAuthHeaders} from "../../hooks/useAuthHeaders";

/**
 * Transforms the cart items into a format that can be sent to the server.
 * @param {object[]} cartItems - The items currently in the cart
 * @param {object} cartItems[].product - The product being purchased
 * @param {number} cartItems[].quantity - The quantity of the product being purchased
 * @returns {object[]} The transformed cart items
 */
const transformCartItems = (cartItems) =>
  cartItems.map((item) => ({
    productId: item.product.id,
    quantity: item.quantity,
  }));

/**
 * Renders the shopping cart page, including cart items, subtotal, and buttons to continue shopping or place an order.
 * @returns {JSX.Element} The rendered shopping cart page
 */
function ShoppingCart() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { headers, userEmail } = useAuthHeaders();

  const { data, isLoading, error, refetch } = useFetch(
    "POST",
    "create-checkout-session",
    headers,
    null,
    null,
    false
  );

  useEffect(() => {
    if (data && data.url) {
      // Stripe checkout page
      window.location = data.url;
    } else if (error) {
      setSnackbarOpen(true);
    }
  }, [data, error]);

  const handleOrderNow = () => {
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
