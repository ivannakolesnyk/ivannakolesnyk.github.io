import { Box, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../assets/img/home.png";

const Frontpage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={5}
        sx={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "primary.main",
            borderRadius: 5,
            padding: "3rem",
            textAlign: "left",
            zIndex: 1,
            "& > *": {
              mb: 4,
            },
          }}
        >
          <Typography
            variant="h1"
            color="primary.contrastText"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "3rem",
                sm: "4rem",
                md: "5rem",
              },
              lineHeight: "1.2",
            }}
          >
            ENJOY YOUR OWN COFFEE AT HOME
          </Typography>
          <Typography
            variant="body1"
            color="primary.contrastText"
            sx={{ fontSize: "2rem" }}
          >
            A variety of products to make your unique drink yourself. From
            grinders to filters, milk frothers to pour-over kettles, our range
            of coffee-making products lets you unleash your inner barista and
            enjoy coffee just the way you like it.
          </Typography>
          <Button
            variant="contained"
            onClick={() => (window.location.href = "/products")}
            sx={{
              mt: 2,
              backgroundColor: "secondary.main",
              color: "secondary.contrastText",
              alignItems: "flex-start",
              [theme.breakpoints.only("xs")]: {
                fontSize: "1.5rem",
                textAlign: "center",
              },
              [theme.breakpoints.only("sm")]: {
                fontSize: "2rem",
                textAlign: "center",
              },
              [theme.breakpoints.only("md")]: {
                fontSize: "3rem",
                textAlign: "left",
              },
            }}
          >
            Order now
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "80%",
                height: "80%",
                backgroundColor: "secondary.main",
                borderRadius: 5,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Frontpage;
