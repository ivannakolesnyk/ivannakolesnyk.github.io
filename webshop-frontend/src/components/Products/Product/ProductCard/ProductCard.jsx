import { Card, CardActionArea } from "@mui/material";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import SpecialOfferBadge from "./SpecialOfferBadge";
import ProductImage from "./ProductImage";
import ProductCardContent from "./ProductCardContent";

/**
 * ProductCard component displays a product card with an image and content.
 * @param {Object} props - Component props
 * @param {Object} props.productData - The product data
 * @param {string} props.id - The product ID
 * @param {string} props.imagePath - The product image path
 * @param {string} props.imageAlt - The product image alt text
 * @param {string} props.productName - The product name
 * @param {number} props.price - The product price
 * @param {boolean} props.isClickable - Indicates if the card is clickable
 * @param {boolean} props.specialOffer - Indicates if the product has a special offer
 * @param {number} props.salePercentage - The sale percentage for the special offer
 * @param {number} props.oldPrice - The old price before the special offer
 * @param {number} props.currentPrice - The current price after the special offer
 */
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
  oldPrice = price,
  currentPrice,
}) {
  const content = useMemo(() => {
    return (
      <Card>
        {specialOffer && <SpecialOfferBadge salePercentage={salePercentage} />}
        <ProductImage alt={imageAlt} src={imagePath} />
        <ProductCardContent
          productName={productName}
          specialOffer={specialOffer}
          oldPrice={oldPrice}
          currentPrice={currentPrice}
          price={price}
        />
      </Card>
    );
  }, [
    specialOffer,
    salePercentage,
    imageAlt,
    imagePath,
    productName,
    oldPrice,
    currentPrice,
    price,
  ]);

  return isClickable ? (
    <Link
      to={{
        pathname: `/products/${id}`,
        state: { product: productData },
      }}
      style={{ textDecoration: "none" }}
    >
      <CardActionArea aria-label={`View product details for ${productName}`}>
        {content}
      </CardActionArea>
    </Link>
  ) : (
    content
  );
}

export default ProductCard;
