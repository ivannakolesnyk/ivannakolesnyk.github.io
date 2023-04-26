import { IconButton } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { useCart } from "../../context/CartContext";

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
