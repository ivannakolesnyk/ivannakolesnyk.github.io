import { Button, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

/**
 *
 * The BannerSection component is a React functional component used for displaying
 * a promotional banner on the home page. It features a special offer headline,
 * a brief description, and a call-to-action button. The background image adds visual
 * interest and complements the promotional message. This component is designed to
 * draw attention to the special offer and encourage users to take advantage of it.
 * @returns {JSX.Element} The JSX code for the BannerSection component.
 */
const BannerSection = () => {
  return (
    <Stack
      component="section"
      minHeight={"80vh"}
      py={24}
      px={8}
      alignItems={"flex-start"}
      justifyContent={"center"}
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/banner.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        component="article"
        sx={{ p: 7, maxWidth: 400, backgroundColor: "extra" }}
      >
        <Stack spacing={4}>
          <Typography
            component="header"
            fontWeight={600}
            variant={"h0"}
            color={"secondary"}
          >
            3 for 2
          </Typography>
          <Typography component="p" color={"secondary"}>
            Mix and match or find exactly what you want
          </Typography>
          <Link to="/products">
            <Button
              variant={"contained"}
              color={"secondary"}
              sx={{
                maxWidth: "160px",
                fontSize: "2rem",
                color: "white",
              }}
              aria-label="Order now"
            >
              ORDER NOW
            </Button>
          </Link>
        </Stack>
      </Paper>
    </Stack>
  );
};

export { BannerSection };
