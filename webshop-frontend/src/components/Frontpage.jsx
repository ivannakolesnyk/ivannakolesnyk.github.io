/*import { Typography, Button, Stack, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../assets/img/home.png";

const Frontpage = () => {
  const theme = useTheme();
  // use Theme hook is used to get the theme object, which is then used to set the textColor variable to the primary color defined in the theme. The textColor variable is then used to set the color of the Typography component using the sx prop.

  return (
    <Stack
      //width={"100vw"}
      py={12}
      px={8}
      border={1}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        sx={{
          p: 8,
          width: 500,
          backgroundColor: "primary.main",
          //borderRadius: 5,
        }}
      >
        <Stack spacing={8} alignItems={"flex-start"}>
          <Typography
            fontWeight={600}
            variant={"h1"}
            color={"primary.contrastText"}
          >
            ENJOY YOUR OWN COFEE AT HOME
          </Typography>
          <Typography color={"primary.contrastText"}>
            A variety of products to make your unique drink yourself. From
            grinders to filters, milk frothers to pour-over kettles, our range
            of coffee-making products lets you unleash your inner barista and
            enjoy coffee just the way you like it.
          </Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{
              width: "200px",
              height: "60px",
              fontSize: "2.2rem",
            }}
          >
            order now
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Frontpage;
*/

import { Typography, Button, Stack, Paper, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../assets/img/home.png";

const Frontpage = () => {
  const theme = useTheme();

  return (
    <Stack
      maxHeight={"100vh"}
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
          <Paper sx={{ p: 7, maxWidth: 500, backgroundColor: "primary.main" }}>
            <Stack spacing={4} alignItems="left">
              <Typography
                fontWeight={600}
                variant={"h1"}
                color={"primary.contrastText"}
              >
                ENJOY YOUR OWN COFEE AT HOME
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
  );
};

export default Frontpage;
