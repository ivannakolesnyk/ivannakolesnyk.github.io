import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";
import LazyLoad from "react-lazy-load";

import { useEffect, useState } from "react";

function ProductCard({ imagePath, productName, price, capacity }) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    import(`../../assets/img/${imagePath}`).then((module) => {
      setImageSrc(module.default);
    });
  }, [imagePath]);
  return (
    <Card>
      <CardActionArea href="/">
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
          <Stack
            direction="row"
            justifyContent={price ? "space-between" : "center"}
            alignItems={"center"}
            marginBottom={"1rem"}
          >
            <Typography fontSize={"2.5rem"} fontWeight={"500"}>
              {productName}
            </Typography>
            {price && capacity && (
              <Typography fontSize={"1.8rem"}>{capacity}ml</Typography>
            )}
          </Stack>
          {price && capacity && (
            <Typography fontWeight={"600"} fontSize={"1.8rem"}>
              {price} NOK
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
