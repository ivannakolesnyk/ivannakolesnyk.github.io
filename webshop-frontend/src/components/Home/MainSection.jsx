import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <Stack
      minHeight={"70vh"}
      py={12}
      px={8}
      justifyContent={"center"}
      alignItems={"flex-start"}
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/home.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
            grinders to filters, milk frothers to pour-over kettles, our range
            of coffee-making products lets you unleash your inner barista and
            enjoy coffee just the way you like it.
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
    </Stack>
  );
};
export { MainSection };
