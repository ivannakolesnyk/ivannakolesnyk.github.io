import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import QuantityAdjuster from "./QuantityAdjuster";
import { useCart } from "../../context/CartContext";

/**
 * Renders a table to display the cart items, adjust quantities, and remove items from the cart.
 * @returns {React.Element} - The CartTable component.
 */
const CartTable = () => {
  const { cart, removeFromCart } = useCart();
  const isSmallScreen = useMediaQuery("(max-width: 700px)");

  const isVerySmallScreen = useMediaQuery("(max-width: 500px)");

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <TableContainer component="section">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component="th"></TableCell>
            <TableCell component="th" style={{ width: "40%" }}>
              <Typography>Product</Typography>
            </TableCell>
            <TableCell component="th" style={{ width: "30%" }}>
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
                <Box display="flex" justifyContent="center" alignItems="center">
                  <IconButton
                    edge="end"
                    aria-label="Delete product"
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
                    src={item.product.product_image}
                    alt={item.product.name}
                    sx={{ width: "50px", height: "auto", mr: 1 }}
                  />
                  <Typography variant={isVerySmallScreen ? "body2" : "body1"}>
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
  );
};

export default CartTable;
