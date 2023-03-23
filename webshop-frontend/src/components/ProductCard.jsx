import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";
import { useTheme } from "@emotion/react";
function ProductCard({ imagePath, productName, price, capacity }) {
  const theme = useTheme();

  return (
    <Card>
      <CardActionArea href="/">
        <CardMedia
          component="img"
          alt="green iguana"
          height="300"
          image={imagePath}
        />
        <CardContent
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "primary.contrastText",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
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
