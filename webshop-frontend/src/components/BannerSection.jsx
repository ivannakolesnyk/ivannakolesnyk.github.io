import { Typography, Button, Stack, Paper, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import banner from "../assets/img/banner.png";

const BannerSection = () => {
  const theme = useTheme();

  return (
    <Stack
      height={"80vh"}
      py={12}
      px={8}
      sx={{
        backgroundImage: `url(${banner})`,
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
          <Paper sx={{ p: 7, maxWidth: 400, backgroundColor: "extra" }}>
            <Stack spacing={4} alignItems="left">
              <Typography fontWeight={600} variant={"h1"} color={"secondary"}>
                3 for 2
              </Typography>
              <Typography color={"secondary"}>
                Mix and match or find exactly what you want
              </Typography>
              <Button
                variant={"contained"}
                color={"secondary"}
                sx={{
                  maxWidth: "160px",
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                ORDER NOW
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
};

export { BannerSection };
