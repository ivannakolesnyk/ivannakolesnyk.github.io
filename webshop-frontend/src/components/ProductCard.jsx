import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";
import { useTheme } from "@emotion/react";

function ProductCard({ imagePath, productName, price }) {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href="/">
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image={imagePath}
        />
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Typography gutterBottom variant="h6" component="div">
              {productName}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              350ml
            </Typography>
          </Stack>
          <Typography variant="body2" color={theme.palette.primary.main}>
            {price} NOK
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
