import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";

const product = {
  imagePath: "products/coffee/coffee1-min.png",
  name: "Coffee",
  price: 67,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  ingredients: ["milk", "beans", "sugar"],
};

function ProductDetails() {
  //   const { id } = useParams();
  //   const [product, setProduct] = useState(null);

  //   const fetchProductDetails = async (id) => {
  //     // Replace this URL with your actual API endpoint
  //     const response = await fetch(`https://your-api/products/${id}`);
  //     const data = await response.json();

  //     setProduct(data);
  //   };

  //   useEffect(() => {
  //     fetchProductDetails(id);
  //   }, [id]);
  const { imagePath, name, price, description, ingredients } = product;
  const [imageSrc, setImageSrc] = useState("");
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  useEffect(() => {
    import(`../../../assets/img/${imagePath}`).then((module) => {
      setImageSrc(module.default);
    });
  }, [imagePath]);
  return (
    <div>
      {product ? (
        <Box sx={{ padding: "7.6rem 6.4rem" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Box
                  component="img"
                  src={imageSrc}
                  alt={name}
                  sx={{ width: "70%", height: "auto" }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ color: "secondary.main" }}>
              <Typography variant="h4" gutterBottom>
                {name}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {`${price} NOK`}
              </Typography>
              <Typography variant="body1" paragraph>
                {description}
              </Typography>
              <Grid container alignItems="center" mb={"3.2rem"}>
                <Grid item>
                  <Typography variant="body1">Ingredients:</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    {ingredients.join(", ")}
                  </Typography>
                </Grid>
              </Grid>
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
