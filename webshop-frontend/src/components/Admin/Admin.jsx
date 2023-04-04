import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StandardCenteredBox from "../Standard_components/StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";
import { ProfileInformation } from "../Standard_components/Profile_and_Admin/ProfileInformation";

/**
The Admin component displays an admin's profile information and provides
links to edit the profile, change the password, and view orders. The user's
profile information is displayed in a Card component, with each piece of
information shown as a ListItem.

@returns {JSX.Element} The JSX code for the Admin component.
*/

const sections = [
  {
    title: "Orders",
    description: "Enter the orders page to see all the orders",
    buttonText: "View Orders",
    link: "/admin/vieworders",
  },
  {
    title: "Testimonials",
    description: "Enter the testimonials page to add or remove testimonials",
    buttonText: "Testimonials",
    link: "/admin/testimonials",
  },
  {
    title: "Products",
    description: "Enter the products page to edit products.",
    buttonText: "Products",
    link: "/admin/products",
  },
];
const Admin = () => {
  const theme = useTheme();

  return (
    <StandardCenteredBox>
      <StandardCenteredCard>
        <ProfileInformation theme={theme} />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button component={Link} to="/admin/edit" variant="contained">
            Edit Profile
          </Button>
          <Button component={Link} to="/admin/changepw" variant="contained">
            Change password
          </Button>
        </CardActions>
        {sections.map((section) => (
          <React.Fragment key={section.title}>
            <Divider />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "secondary.main" }}
              >
                {section.title}
              </Typography>
              <Typography variant="body2">{section.description}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button component={Link} to={section.link} variant="contained">
                {section.buttonText}
              </Button>
            </CardActions>
          </React.Fragment>
        ))}
      </StandardCenteredCard>
    </StandardCenteredBox>
  );
};

export default Admin;
