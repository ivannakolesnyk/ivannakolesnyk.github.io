import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useCart } from "../../../context/CartContext";
import InternalError from "../../Standard_components/InternalError";
import Loading from "../../Standard_components/Loading";
import useFetch from "../../../hooks/useFetch";
import CustomSnackbar from "../../Standard_components/CustomSnackbar";

function ProductDetails() {
  const { loggedIn } = useContext(AuthContext);
  const { id } = useParams();
  const location = useLocation();
  const productData = location.state?.product;
  let navigate = useNavigate();

  const [product, setProduct] = useState(productData);

  const { data, isLoading, error, refetch, fetched } = useFetch(
    "GET",
    `products/${id}`,
    {},
    {},
    {},
    false
  );

  useEffect(() => {
    if (!product && !error) {
      refetch();
    }
  }, [product, refetch, error]);

  useEffect(() => {
    if (fetched && data) {
      setProduct(data);
    }
  }, [data, fetched]);

  const [imageSrc, setImageSrc] = useState("");
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  useEffect(() => {
    if (product && product.product_image) {
      setImageSrc(`${process.env.PUBLIC_URL}/assets/img/${product.product_image}`);
    }
  }, [product]);

  const { addToCart } = useCart();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleAddToCart = () => {
    if (loggedIn) {
      addToCart(product, quantity);
      setSnackbarOpen(true);
    } else {
      navigate("/login", { state: { from: location.pathname } });
    }
  };
  const handleSnackbarClose = () => setSnackbarOpen(false);

  if (error) return <InternalError />;
  if (isLoading) return <Loading />;

  return (
    <>
      {product ? (
        <div>
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
                        {product.ingredients}
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
        </div>
      ) : null}

      <CustomSnackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        severity="success"
        message="Product added to the cart!"
      />
    </>
  );
}

export default ProductDetails;

