import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";

/**

 ProductQuantityController component controls the quantity of a specific product.
 @param {Object} props - Component props
 @param {number} props.quantity - Quantity of the product
 @param {Function} props.setQuantity - Function to set the quantity of the product
 */
function ProductQuantityController({ quantity, setQuantity }) {
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: ".15rem solid #1F3A33",
        borderRadius: "8px",
      }}
    >
      <IconButton onClick={decrementQuantity} aria-label="Decrease quantity">
        <RemoveIcon sx={{ color: "secondary.main" }} />
      </IconButton>
      <Typography variant="body2" sx={{ margin: "0 10px" }}>
        {quantity}
      </Typography>
      <IconButton onClick={incrementQuantity} aria-label="Increase quantity">
        <AddIcon sx={{ color: "secondary.main" }} />
      </IconButton>
    </Box>
  );
}

export default ProductQuantityController;
