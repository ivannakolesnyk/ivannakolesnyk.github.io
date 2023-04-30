import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import { useCart } from "../../../../context/CartContext";
import useFetch from "../../../../hooks/useFetch";
import InternalError from "../../../Standard_components/InternalError";
import Loading from "../../../Standard_components/Loading";
import CustomSnackbar from "../../../Standard_components/CustomSnackbar";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import { Box, Grid } from "@mui/material";

/**
 * ProductDetails component displays the details of a specific product.
 * It fetches the product data from the API and allows users to add the product to the cart.
 */
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

  const [quantity, setQuantity] = useState(1);
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "3.2rem",
          }}
        >
          <Grid container spacing={0}>
            <ProductImage product={product} />

            <ProductInfo
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
              handleAddToCart={handleAddToCart}
            />
          </Grid>
        </Box>
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
