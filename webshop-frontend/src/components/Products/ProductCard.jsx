import LazyLoad from "react-lazy-load";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import CardActionArea from "@mui/material/CardActionArea";

function ProductCard({
  id,
  imagePath,
  productName,
  price,
  capacity,
  isClickable = true,
  specialOffer = false,
  oldPrice,
  currentPrice,
}) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    import(`../../assets/img/${imagePath}`).then((module) => {
      setImageSrc(module.default);
    });
  }, [imagePath]);

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
          15 %
        </Box>
      )}
      <LazyLoad offset={300}>
        <CardMedia
          component="img"
          alt="green iguana"
          src={imageSrc}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
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
              {300} NOK
            </Typography>
            <Typography fontSize={"1.8rem"} fontWeight={"600"}>
              {price} NOK
            </Typography>
          </Stack>
        ) : (
          price &&
          capacity && (
            <Typography fontWeight={"600"} fontSize={"1.8rem"}>
              {price} NOK
            </Typography>
          )
        )}
      </CardContent>
    </Card>
  );

  return isClickable ? (
    <Link to={`/product/${id}`}>
      <CardActionArea>{content}</CardActionArea>
    </Link>
  ) : (
    content
  );
}

export default ProductCard;
