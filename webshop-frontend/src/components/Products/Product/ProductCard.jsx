import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

function ProductCard({
  productData,
  id,
  imagePath,
  imageAlt,
  productName,
  price,
  isClickable,
  specialOffer,
  salePercentage,
  oldPrice,
  currentPrice,
}) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    import(`../../../assets/img/${imagePath}`).then((module) => {
      setImageSrc(module.default);
    });
  }, [imagePath]);

  // This is can be bad because content will get reinitialized,
  // every time this function updates, which is often, because of how React component rendering works (React component lifecycle)
  const content = (
    <Card>
      {specialOffer && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "error.main",
            color: "white",
            padding: "0.5rem",
            zIndex: 1,
          }}
        >
          {salePercentage} %
        </Box>
      )}
      <LazyLoad offset={300}>
        <CardMedia
          component="img"
          alt={imageAlt}
          src={imageSrc}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            objectFit: "contain",
            height: 250,
          }}
        />
      </LazyLoad>
      <CardContent
        sx={{
          color: "primary.contrastText",
        }}
      >
        <Typography fontSize={"2.5rem"} fontWeight={"500"}>
          {productName}
        </Typography>
        {specialOffer ? (
          <Stack direction="row" alignItems={"center"} marginBottom={"1rem"}>
            <Typography
              fontSize={"1.8rem"}
              fontWeight={"600"}
              sx={{ textDecoration: "line-through", marginRight: "1.6rem" }}
            >
              {oldPrice} NOK
            </Typography>
            <Typography fontSize={"1.8rem"} fontWeight={"600"}>
              {currentPrice} NOK
            </Typography>
          </Stack>
        ) : (
          price && (
            <Typography fontWeight={"600"} fontSize={"1.8rem"}>
              {price} NOK
            </Typography>
          )
        )}
      </CardContent>
    </Card>
  );

  return isClickable ? (
    <Link
      to={{
        pathname: `/products/${id}`,
        state: { product: productData },
      }}
      style={{ textDecoration: "none" }}
    >
      <CardActionArea>{content}</CardActionArea>
    </Link>
  ) : (
    content
  );
}

export default ProductCard;
