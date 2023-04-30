import { CardContent, Typography, Stack } from "@mui/material";

/**
 * ProductCardContent component displays the content of a product card.
 * @param {Object} props - Component props
 * @param {string} props.productName - Name of the product
 * @param {boolean} props.specialOffer - Indicates if the product has a special offer
 * @param {number} props.oldPrice - Old price of the product before the special offer
 * @param {number} props.currentPrice - Current price of the product after the special offer
 * @param {number} props.price - Regular price of the product
 */
function ProductCardContent({
  productName,
  specialOffer,
  oldPrice,
  currentPrice,
  price,
}) {
  return (
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
  );
}

export default ProductCardContent;
