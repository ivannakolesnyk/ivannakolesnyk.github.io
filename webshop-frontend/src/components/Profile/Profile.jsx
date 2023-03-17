import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/material/styles";

/**
 * The ProfilePage component displays a user's profile information and provides
 * links to edit the profile, change the password, and view orders. The user's
 * profile information is displayed in a Card component, with each piece of
 * information shown as a ListItem.
@returns {JSX.Element} The JSX code for the ProfilePage component.
*/
const ProfilePage = () => {
  const theme = useTheme();

  /**
   * A custom ListItem component that takes in `icon`, `primary` and 'secondary' as props.
   * It's use is in the the Card which shows the personal informartion of a user.
   */
  const ProfileListItem = ({ icon, primary, secondary }) => (
    <ListItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  );

  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}>
      <Card sx={{ width: "50%", maxWidth: "700px" }}>
        <CardHeader
          sx={{ color: theme.palette.primary.contrastText }}
          title="My Monoca"
          subheader="User id: 123, customer" //customer can be changed to admin if it's an admin
        />
        <Divider />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Profile Information
          </Typography>
          <List>
            <ProfileListItem
              icon={<PersonIcon />}
              primary="Name"
              secondary="Simon Doe"
            />
            <ProfileListItem
              icon={<EmailIcon />}
              primary="Email"
              secondary="simondoe@example.com"
            />
            <ProfileListItem
              icon={<PhoneIcon />}
              primary="Phone"
              secondary="+47 90090900"
            />
            <ProfileListItem
              icon={<LocationOnIcon />}
              primary="Address"
              secondary="Chicken Road 13, 7080 Farm County"
            />
          </List>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button component={Link} to="/profile/edit" variant="contained">
            Edit Profile
          </Button>
          <Button component={Link} to="/profile/changepw" variant="contained">
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
          <Typography variant="body2">
            Here you can view your orders.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button component={Link} to="/profile/vieworders" variant="contained">
            View Orders
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProfilePage;
