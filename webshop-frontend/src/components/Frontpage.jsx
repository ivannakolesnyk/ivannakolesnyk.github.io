import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../assets/img/home.png";

const Frontpage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          borderRadius: 5,
          padding: "2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          textAlign: "left",
          position: "absolute",
          top: "50%",
          left: "15%",
          transform: "translate(-30%, -50%)",
          zIndex: 1,
          "& > *": {
            margin: "2rem ",
          },
        }}
      >
        <Typography
          variant="h1"
          color="primary.contrastText"
          sx={{ textAlign: "left", width: "100%", mt: 2 }}
        >
          ENJOY YOUR <br />
          OWN COFFEE <br />
          AT HOME
        </Typography>
        <Typography
          variant="body2"
          color="primary.contrastText"
          sx={{ textAlign: "left", width: "100%", mt: 2 }}
        >
          A variety of products to make your unique drink yourself. From
          grinders to filters, milk <br /> frothers to pour-over kettles, our
          range of coffee-making products lets you unleash <br />
          your inner barista and enjoy coffee just the way you like it.
        </Typography>
        <Button
          variant="contained"
          onClick={() => (window.location.href = "/products")}
          sx={{
            mt: 2,
            backgroundColor: "secondary.main",
            color: "secondary.contrastText",
            alignItems: "flex-start",
          }}
        >
          Order now
        </Button>
      </Box>
    </Box>
  );
};

export default Frontpage;
