import React from "react";
import { CardMedia, Container, Grid, Typography } from "@mui/material";

/**
 *
 *  The AboutUs component is a responsive React component designed to display
 * information about Mocha Nooka Cafe. The component contains headings, body
 * text, and images arranged in a grid layout. It is styled using Material-UI
 * components and the custom theme provided by the application.
 * @returns {JSX.Element} The JSX code for the AboutUs component.
 */
const AboutUs = () => {
  return (
    <Container maxWidth="xl" component="main" sx={{ py: "2rem" }}>
      <Grid
        container
        spacing={{
          xs: 2,
          md: 4,
        }}
        flexDirection="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} order={{ xs: 1, md: 1 }}>
          <Typography
            variant="h1"
            sx={{
              color: "secondary.main",
              pb: "0.5rem",
              textAlign: "center",
            }}
            role="heading"
            aria-level="1"
            aria-label="About us"
          >
            About us
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
          <CardMedia
            component="img"
            image={`${process.env.PUBLIC_URL}/assets/img/aboutus/aboutUS1.jpg`}
            alt="Coffee shop"
            sx={{ borderRadius: "1rem", width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 3 }}>
          <Typography
            variant="body1"
            sx={{
              color: "secondary.main",
            }}
          >
            Mocha Nooka Cafe is the place to be for cool cats and urbanites
            alike. Located in the heart of the city, it's the go-to spot for the
            perfect cup of coffee or a tasty bite of food. Whether you're
            grabbing a quick espresso on the go or settling in for a leisurely
            lunch, you'll find the perfect balance of atmosphere and flavor. Our
            baristas are passionate about crafting the perfect cup, with a
            rotating selection of specialty brews, beans, and blends. Plus, our
            friendly staff is always on hand to offer up recommendations for the
            perfect pairing. Come check us out for an unforgettable experience.
          </Typography>
        </Grid>
        <Grid item xs={12} order={{ xs: 3, md: 4 }}>
          <Typography
            variant="h2"
            sx={{
              color: "secondary.main",
              textAlign: "left",
              "@media (max-width: 899px)": {
                textAlign: "center",
              },
            }}
            role="heading"
            aria-level="2"
            aria-label="Our values"
          >
            Our values
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} order={{ xs: 4, md: 6 }}>
          <CardMedia
            component="img"
            image={`${process.env.PUBLIC_URL}/assets/img/aboutus/aboutUS2.jpg`}
            alt="Coffee shop"
            sx={{ borderRadius: "1rem", width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 3, md: 5 }}>
          <Typography
            variant="body1"
            sx={{
              color: "secondary.main",
            }}
          >
            At Mocha Nooka Cafe, we strive to create a peaceful, modern
            atmosphere for our guests to enjoy. Our carefully crafted menu of
            delicious treats and beverages is designed to please all palates.
            Whether you're in the mood for something sweet, savory, or something
            in between, we have something that will tantalize your taste buds.
            Our experienced baristas are passionate about crafting the perfect
            cup, to ensure the most enjoyable coffee experience. And our
            friendly staff will always be around to provide helpful advice and
            recommendations. We believe in creating a calm, modern, and tasty
            space for our guests to enjoy.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
