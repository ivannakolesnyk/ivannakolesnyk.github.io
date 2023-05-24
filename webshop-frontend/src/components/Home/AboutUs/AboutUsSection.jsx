import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * The AboutUsSection component is a React functional component used for displaying
 * an "About Us" section on the home page. It provides a brief introduction to the
 * online coffee shop and its dedication to offering high-quality products. The section
 * includes a heading, a short description, a call-to-action button to read more, and a
 * visual element showcasing some of the products. This component is designed to give
 * users a quick overview of the shop's purpose and values, and to invite them to learn
 * more about the brand.
 * @returns {JSX.Element} The JSX code for the AboutUsSection component.
 */
const AboutUsSection = () => {
  const pictures = ["/box.png", "/products.png", "/productsbox.png"];

  return (
    <Box component="section" sx={{ py: 8, pl: 8, pr: 8 }}>
      <Typography
        variant="h1"
        color="primary.contrastText"
        align="left"
        gutterBottom
        component="header"
        fontSize={{ xs: "4rem", sm: "5.5rem", md: "7rem" }}
      >
        About Us
      </Typography>
      <Typography
        fontSize={{ xs: "1.8rem", sm: "2.2rem", md: "2.5rem" }}
        component="p"
      >
        Welcome to MONOCA where we offer a wide range of high-quality products
        for coffee and tea lovers alike. At our online coffee shop, we believe
        that a great cup of coffee or tea is not just a beverage, it's an
        experience. That's why we are dedicated to providing our customers with
        the finest coffee and tea products from around the world.
      </Typography>
      <Box component="nav" sx={{ display: "flex", pt: 4 }}>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ maxWidth: "200px", fontSize: "2.2rem", color: "secondary" }}
          >
            <span className="visually-hidden">Read more about Monoca</span>
            Read more
          </Button>
        </Link>
      </Box>
      <Box component="aside" sx={{ display: "flex", pt: 6 }}>
        <Grid container spacing={2}>
          {pictures.map((image, index) => (
            <Grid key={index} item xs={4}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/aboutus${image}`}
                alt={index}
                style={{ maxWidth: "100%" }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export { AboutUsSection };
