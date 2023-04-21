import { Delete as DeleteIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import CartEmpty from "./CartEmpty";
import QuantityAdjuster from "./QuantityAdjuster";

function ShoppingCart() {
  // Add this state inside ShoppingCart function
  const [isLoading, setIsLoading] = useState(false);

  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 700px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 500px)");
  const { getJwtPayload } = useContext(AuthContext);

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  const [imagesSrc, setImagesSrc] = useState([]);

  useEffect(() => {
    if (cart && cart.length > 0) {
      Promise.all(
        cart.map((item) =>
          import(`../../assets/img/${item.product.product_image}`)
        )
      ).then((modules) => {
        setImagesSrc(modules.map((module) => module.default));
      });
    } else {
      setImagesSrc([]);
    }
  }, [cart]);

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
      console.error(error);
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
        color: "yellow",
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
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell style={{ width: "40%" }}>
                  <Typography>Product</Typography>
                </TableCell>
                <TableCell style={{ width: "30%" }}>
                  <Typography>Price</Typography>
                </TableCell>
                {!isSmallScreen && (
                  <TableCell style={{ width: "25%" }}>
                    <Typography>Quantity</Typography>
                  </TableCell>
                )}
                {!isVerySmallScreen && (
                  <TableCell style={{ width: "13%" }}>
                    <Typography>Total</Typography>
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item, index) => (
                <TableRow key={item.product.id}>
                  <TableCell>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleRemoveFromCart(item.product.id)}
                        sx={{ color: "secondary.main" }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        component="img"
                        src={imagesSrc[index]}
                        alt={item.product.name}
                        sx={{ width: "50px", height: "auto", mr: 1 }}
                      />
                      <Typography
                        variant={isVerySmallScreen ? "body2" : "body1"}
                      >
                        {item.product.name}
                      </Typography>
                    </Box>
                    {isSmallScreen && <QuantityAdjuster item={item} />}
                  </TableCell>
                  <TableCell>{`${item.product.price} NOK`}</TableCell>
                  {!isSmallScreen && (
                    <TableCell>
                      <QuantityAdjuster item={item} />
                    </TableCell>
                  )}
                  {!isVerySmallScreen && (
                    <TableCell>{`${
                      item.product.price * item.quantity
                    } NOK`}</TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Divider sx={{ my: 2 }} />
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ padding: "0 4rem" }}
        >
          <Typography variant="h6">Subtotal:</Typography>
          <Typography variant="h6">{`${calculateTotalPrice()} NOK`}</Typography>
        </Box>
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
