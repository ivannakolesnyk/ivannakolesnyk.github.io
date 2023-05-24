import { Button, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

/**
 *
 * The MainSection component is a React functional component used for displaying
 * the main content area of the home page. It features a prominent headline, a
 * brief description, and a call-to-action button. The background image sets the
 * tone for the website and encourages users to explore the products and services
 * offered. This component is designed to capture the user's attention and
 * provide a clear call-to-action.
 * @returns {JSX.Element} The JSX code for the MainSection component.
 */
const MainSection = () => {
  return (
    <Stack
      component="section"
      minHeight={"70vh"}
      py={{ xs: 6, sm: 12 }}
      px={{ xs: 4, sm: 8 }}
      justifyContent={"center"}
      alignItems={"flex-start"}
      spacing={4}
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/home.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="main section"
    >
      <Paper
        sx={{
          p: { xs: 6, md: 8 },
          maxWidth: { xs: "100%", sm: 500 },
          backgroundColor: "primary.main",
        }}
      >
        <Stack spacing={3} alignItems="left">
          <Typography
            component="h2"
            fontWeight={600}
            variant={"h1"}
            color={"primary.contrastText"}
            sx={{
              fontSize: { xs: "4rem", sm: "5.5rem", md: "7rem" },
            }}
          >
            ENJOY YOUR OWN COFFEE AT HOME
          </Typography>
          <Typography
            component="p"
            fontWeight={300}
            variant={"body2"}
            color={"primary.contrastText"}
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            }}
          >
            A variety of products to make your unique drink yourself. From
            grinders to filters, milk frothers to pour-over kettles, our range
            of coffee-making products lets you unleash your inner barista and
            enjoy coffee just the way you like it.
          </Typography>
          <Link to="/products">
            <Button
              variant={"contained"}
              color={"secondary"}
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3em" },
                color: "white",
              }}
              aria-label="order now"
            >
              ORDER NOW
            </Button>
          </Link>
        </Stack>
      </Paper>
    </Stack>
  );
};

export { MainSection };
