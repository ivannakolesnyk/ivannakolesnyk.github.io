import { Typography, Button, Stack, Paper, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../assets/img/home.png";
import { Link } from "react-router-dom";

const MainSection = () => {
  const theme = useTheme();

  return (
    <Stack
      height={"70vh"}
      py={12}
      px={8}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid
        container
        justifyContent="left"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={8} lg={6}>
          <Paper sx={{ p: 7, maxWidth: 500, backgroundColor: "primary.main" }}>
            <Stack spacing={3} alignItems="left">
              <Typography
                fontWeight={600}
                variant={"h1"}
                color={"primary.contrastText"}
              >
                ENJOY YOUR OWN COFFEE AT HOME
              </Typography>
              <Typography fontWeight={300} variant={"body2"}>
                A variety of products to make your unique drink yourself. From
                grinders to filters, milk frothers to pour-over kettles, our
                range of coffee-making products lets you unleash your inner
                barista and enjoy coffee just the way you like it.
              </Typography>
              <Link to="/product">
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{
                    maxWidth: "200px",
                    fontSize: "2.2rem",
                    color: "white",
                  }}
                >
                  ORDER NOW
                </Button>
              </Link>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
};
export { MainSection };
