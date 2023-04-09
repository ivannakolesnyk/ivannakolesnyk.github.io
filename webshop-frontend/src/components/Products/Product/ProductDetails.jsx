import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useCart } from "../../../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const productData = location.state?.product;

  const [product, setProduct] = useState(productData);

  const fetchProductDetails = async (id) => {
    // Replace this URL with your actual API endpoint
    const response = await fetch(`http://localhost:8080/products/${id}`);
    const data = await response.json();

    setProduct(data);
  };

  useEffect(() => {
    if (!productData) {
      fetchProductDetails(id);
    }
  }, [id, productData]);

  const [imageSrc, setImageSrc] = useState("");
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  useEffect(() => {
    if (product) {
      import(`../../../assets/img/${product.product_image}`).then((module) => {
        setImageSrc(module.default);
      });
    }
  }, [product]);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div>
      {product ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "3.2rem",
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Box
                  component="img"
                  src={imageSrc}
                  alt={product.name}
                  sx={{ width: "70%", height: "auto" }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "secondary.main",
              }}
            >
              <Typography variant="h4" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {`${product.price} NOK`}
              </Typography>
              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>
              {product.ingredients.length !== 0 && (
                <Grid container alignItems="center" mb={"3.2rem"}>
                  <Grid item>
                    <Typography variant="body1">Ingredients:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" sx={{ marginLeft: 1 }}>
                      {product.ingredients.join(", ")}
                    </Typography>
                  </Grid>
                </Grid>
              )}
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: ".15rem solid #1F3A33",
                      borderRadius: "8px",
                    }}
                  >
                    <IconButton onClick={decrementQuantity}>
                      <RemoveIcon sx={{ color: "secondary.main" }} />
                    </IconButton>
                    <Typography variant="body2" sx={{ margin: "0 10px" }}>
                      {quantity}
                    </Typography>
                    <IconButton onClick={incrementQuantity}>
                      <AddIcon sx={{ color: "secondary.main" }} />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ShoppingCartIcon />}
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProductDetails;
