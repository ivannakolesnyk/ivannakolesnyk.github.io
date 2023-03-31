import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StandardCenteredBox from "../Standard_components/StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";
import {ProfileInformation} from "../Standard_components/Profile_and_Admin/ProfileInformation";

/**
The Admin component displays an admin's profile information and provides
links to edit the profile, change the password, and view orders. The user's
profile information is displayed in a Card component, with each piece of
information shown as a ListItem.
@returns {JSX.Element} The JSX code for the Admin component.
*/
const Admin = () => {
  const theme = useTheme();

  return (
    <StandardCenteredBox>
      <StandardCenteredCard>
        <ProfileInformation theme={theme}/>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button component={Link} to="/admin/edit" variant="contained">
            Edit Profile
          </Button>
          <Button component={Link} to="/admin/changepw" variant="contained">
            Change password
          </Button>
        </CardActions>
        <Divider />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Orders
          </Typography>
          <Typography variant="body2">Here you can view all orders.</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button component={Link} to="/admin/vieworders" variant="contained">
            View Orders
          </Button>
        </CardActions>
        <Divider />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Testimonials
          </Typography>
          <Typography variant="body2">
            Here you can edit testimonials.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button component={Link} to="/admin/testimonials" variant="contained">
            Testimonials
          </Button>
        </CardActions>
        <Divider />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Products
          </Typography>
          <Typography variant="body2">Here you can edit products.</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button component={Link} to="/admin/products" variant="contained">
            Products
          </Button>
        </CardActions>
      </StandardCenteredCard>
    </StandardCenteredBox>
  );
};

export default Admin;
