import { Box } from "@mui/material";

/**
 * SpecialOfferBadge component displays a special offer badge on a product card.
 * @param {number} salePercentage - Percentage of the sale
 */
function SpecialOfferBadge({ salePercentage }) {
  return (
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
  );
}

export default SpecialOfferBadge;
