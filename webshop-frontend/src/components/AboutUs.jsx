import React from "react";
import { Typography, Container, Grid, CardMedia } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import aboutUs1 from "../assets/img/aboutus/aboutUS1.jpg";
import aboutUs2 from "../assets/img/aboutus/aboutUS2.jpg";

const AboutUs = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ py: "2rem" }}>
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
              color: theme.palette.primary.contrastText,
              pb: "0.5rem",
              textAlign: "center",
            }}
          >
            About us
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
          <CardMedia
            component="img"
            image={aboutUs1}
            alt="Coffee shop"
            sx={{ borderRadius: "1rem", width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 3 }}>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.primary.contrastText,
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
            variant="h4"
            sx={{
              color: theme.palette.primary.contrastText,
              textAlign: "left",
            }}
          >
            Our values
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 4, md: 6 }}>
          <CardMedia
            component="img"
            image={aboutUs2}
            alt="Coffee shop"
            sx={{ borderRadius: "1rem", width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 3, md: 5 }}>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.primary.contrastText,
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
