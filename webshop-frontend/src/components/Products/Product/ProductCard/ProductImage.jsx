import { CardMedia } from "@mui/material";
import LazyLoad from "react-lazy-load";

/**
 * ProductImage component displays the image of a product.
 * @param {string} alt - Alternative text for the image
 * @param {string} src - Source path for the image
 */
function ProductImage({ alt, src }) {
  return (
    <LazyLoad offset={300}>
      <CardMedia
        component="img"
        alt={alt}
        src={src}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          objectFit: "contain",
          height: 250,
        }}
      />
    </LazyLoad>
  );
}

export default ProductImage;
