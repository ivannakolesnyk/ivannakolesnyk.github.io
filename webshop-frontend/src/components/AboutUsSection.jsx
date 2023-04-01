import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Button, Grid } from "@mui/material";
import boxImage from "../assets/img/aboutus/box.png";
import productsBoxImage from "../assets/img/aboutus/products_box.png";
import productsImage from "../assets/img/aboutus/products.png";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={6}>
        <Typography variant="h2" component="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Welcome to MONOCA where we offer a wide range of high-quality products
          for coffee and tea lovers alike At our online coffee shop, we believe
          that a great cup of coffee or tea is not just a beverage, it's an
          experience. That's why we are dedicated to providing our customers
          with the finest coffee and tea products from around the world. We work
          with reputable suppliers to ensure that our products are of the
          highest quality, and we are constantly updating our selection to offer
          you the best possible experience.
        </Typography>
        <Link to="/about">
          <Button variant="contained" color="primary" size="large">
            Read More
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={boxImage} alt="Box" style={{ maxWidth: "100%" }} />
          </Grid>
          <Grid item xs={4}>
            <img
              src={productsBoxImage}
              alt="Products Box"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              src={productsImage}
              alt="Products"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { AboutUsSection };
