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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ShoppingCart() {
  const { cart, removeFromCart, adjustQuantity } = useCart();
  const navigate = useNavigate();

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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        mt: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "80%",
          bgcolor: "white",
          borderRadius: 2,
          p: 2,
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.product.id}>
                  <TableCell>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleRemoveFromCart(item.product.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Box
                      component="img"
                      src={item.product.imageSrc}
                      alt={item.product.name}
                      sx={{ width: "50px", height: "auto", mr: 1 }}
                    />
                    <Typography variant="body1">{item.product.name}</Typography>
                  </TableCell>
                  <TableCell>{`${item.product.price} NOK`}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => adjustQuantity(item.product.id, -1)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    {item.quantity}
                    <IconButton
                      onClick={() => adjustQuantity(item.product.id, 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>{`${
                    item.product.price * item.quantity
                  } NOK`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Subtotal:</Typography>
          <Typography variant="h6">{`${calculateTotalPrice()} NOK`}</Typography>
        </Box>
      </Paper>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button
          variant="outlined"
          color="primary"
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
