import { IconButton } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { useCart } from "../../context/CartContext";

/**
 * Renders buttons for adjusting the quantity of an item in the cart.
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.item - The cart item to adjust the quantity for.
 * @returns {React.Element} - The QuantityAdjuster component.
 */
const QuantityAdjuster = ({ item }) => {
  const { adjustQuantity } = useCart();
  return (
    <>
      <IconButton
        onClick={() => adjustQuantity && adjustQuantity(item.product.id, -1)}
        sx={{ color: "secondary.main" }}
        aria-label={`Decrease quantity of ${item.product.name}`}
      >
        <RemoveIcon />
      </IconButton>
      {item.quantity}
      <IconButton
        onClick={() => adjustQuantity && adjustQuantity(item.product.id, 1)}
        sx={{ color: "secondary.main" }}
        aria-label={`Increase quantity of ${item.product.name}`}
      >
        <AddIcon />
      </IconButton>
    </>
  );
};

export default QuantityAdjuster;
