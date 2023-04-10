import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Remove as RemoveIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
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
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ShoppingCart() {
  const { cart, removeFromCart, adjustQuantity } = useCart();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 700px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 500px)");

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
          import(`../assets/img/${item.product.product_image}`)
        )
      ).then((modules) => {
        setImagesSrc(modules.map((module) => module.default));
      });
    } else {
      setImagesSrc([]);
    }
  }, [cart]);

  if (cart.length === 0) {
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
  }

  const adjutQty = (item) => (
    <>
      <IconButton
        onClick={() => adjustQuantity(item.product.id, -1)}
        sx={{ color: "secondary.main" }}
      >
        <RemoveIcon />
      </IconButton>
      {item.quantity}
      <IconButton
        onClick={() => adjustQuantity(item.product.id, 1)}
        sx={{ color: "secondary.main" }}
      >
        <AddIcon />
      </IconButton>
    </>
  );

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
                    {isSmallScreen && adjutQty(item)}
                  </TableCell>
                  <TableCell>{`${item.product.price} NOK`}</TableCell>
                  {!isSmallScreen && <TableCell>{adjutQty(item)}</TableCell>}
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
        <Button variant="contained" color="primary">
          Order Now
        </Button>
      </Box>
    </Box>
  );
}

export default ShoppingCart;
