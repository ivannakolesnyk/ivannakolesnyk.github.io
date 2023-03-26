import { Typography, Button, Stack, Paper, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../assets/img/home.png";
import banner from "../assets/img/banner.png";

const Frontpage = () => {
  const theme = useTheme();

  return (
    <div>
      <Stack
        maxHeight={"300vh"}
        py={12}
        px={8}
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid container justifyContent="left">
          <Grid item xs={12} md={8} lg={6}>
            <Paper
              sx={{ p: 7, maxWidth: 500, backgroundColor: "primary.main" }}
            >
              <Stack spacing={3} alignItems="left">
                <Typography
                  fontWeight={600}
                  variant={"h1"}
                  color={"primary.contrastText"}
                >
                  ENJOY YOUR OWN COFFEE AT HOME
                </Typography>
                <Typography color={"primary.contrastText"}>
                  A variety of products to make your unique drink yourself. From
                  grinders to filters, milk frothers to pour-over kettles, our
                  range of coffee-making products lets you unleash your inner
                  barista and enjoy coffee just the way you like it.
                </Typography>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{
                    maxWidth: "200px",
                    fontSize: "2.2rem",
                  }}
                >
                  ORDER NOW
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Stack>
      <Stack
        height={"90vh"}
        py={12}
        px={8}
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "10vh",
        }}
      >
        <Grid container justifyContent="left">
          <Grid item xs={12} md={8} lg={6}>
            <Paper
              sx={{ p: 7, maxWidth: 300, backgroundColor: "secondary.main" }}
            >
              <Stack spacing={4} alignItems="left">
                <Typography
                  fontWeight={600}
                  variant={"h1"}
                  color={"secondary.contrastText"}
                >
                  3 for 2
                </Typography>
                <Typography color={"secondary.contrastText"}>
                  Mix and match or find exactly what you want
                </Typography>
                <Button
                  variant={"contained"}
                  color={"primary"}
                  sx={{
                    maxWidth: "160px",
                    fontSize: "2rem",
                  }}
                >
                  ORDER NOW
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default Frontpage;
