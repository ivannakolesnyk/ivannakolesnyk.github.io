import { Box, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../assets/img/home.png";

const Frontpage = () => {
  const theme = useTheme();
  // use Theme hook is used to get the theme object, which is then used to set the textColor variable to the primary color defined in the theme. The textColor variable is then used to set the color of the Typography component using the sx prop.

  return (
    //This returns a Box component from Material-UI which is a container for other components. The sx prop is used to define CSS styling for the Box component, including a background image, a minimum height, and centering of its child components.
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
          margin: "2 auto",
          padding: "0 1rem",
        }}
        //This returns a Grid component from Material-UI which is used to create a responsive grid layout. The container prop is used to define it as a container for other components, and the sx prop is used to define CSS styling for the Grid component, including a maximum width and margin.
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "primary.main",
            borderRadius: 5,
            padding: "8rem",
            textAlign: "left",
            zIndex: 1,
            "& > *": {
              mb: 4,
            },
          }}
          //This returns a Grid item component from Material-UI which is a child of the previous Grid component. The xs and md props define how many columns the item should span on different screen sizes. The sx prop is used to define CSS styling for the Grid item component, including a background color, padding, and text alignment.
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
            //This returns a Typography component from Material-UI which is used to display text. The variant prop is used to define it as an h1 element, and the sx prop is used to define CSS styling for the Typography component, including font size and line height.
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
                textAlign: "center",
              },
            }}
            //This returns a Button component from Material-UI which is used to create a button element. The variant prop is used to define it as a contained button. The onClick prop defines a function that is called when the button is clicked, which redirects the user to the "/products" page. The sx prop is used to define CSS styling for the Button component, including background color, text color, and font size.
          >
            Order now
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", alignItems: "center" }}
          //This returns another Grid item component from Material-UI which is a child of the previous Grid component. The xs and md props define how many columns the item should span on different screen sizes. The sx prop is used to define CSS styling for the Grid item component, including text alignment.
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
