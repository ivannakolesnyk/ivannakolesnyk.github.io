import StandardCenteredCard from "../../Standard_components/StandardCenteredCard";
import StandardCenteredBox from "../../Standard_components/StandardCenteredBox";
import {
  Button,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { ProfileInformation } from "../../Standard_components/Profile_and_Admin/ProfileInformation";
import { Link } from "react-router-dom";
import React from "react";

/**
 * The UserProfile component displays a user's profile information and provides
 * links to edit the profile, change the password, and view orders. The user's
 * profile information is displayed in a Card component, with each piece of
 * information shown as a ListItem.
 * @param {Object} props - The component properties
 * @param {Object} props.theme - The theme object from MUI
 * @param {Object} props.profileData - The profile data object fetched from the API
 * @returns {JSX.Element} The JSX code for the UserProfile component.
 */
export function UserProfile(props) {
  return (
    <StandardCenteredBox component="main" aria-labelledby="profile-title">
      <StandardCenteredCard title="My Monoca" ariaLabel="User profile">
        <Divider />
        <ProfileInformation
          theme={props.theme}
          profileData={props.profileData}
        />
        <CardActions
          component="nav"
          sx={{ justifyContent: "flex-end", paddingBottom: 2 }}
        >
          <Button
            component={Link}
            to="/profile/edit"
            variant="contained"
            aria-label="Edit profile"
          >
            Edit Profile
          </Button>
          <Button
            component={Link}
            to="/profile/changepw"
            variant="contained"
            aria-label="Change password"
          >
            Change password
          </Button>
        </CardActions>
        <Divider />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="header"
            sx={{ color: "secondary.main" }}
            id="profile-title"
          >
            Orders
          </Typography>
          <Typography variant="body2">
            Here you can view your orders.
          </Typography>
        </CardContent>
        <CardActions
          component="nav"
          sx={{ justifyContent: "flex-end", paddingBottom: 2 }}
        >
          <Button
            component={Link}
            to="/profile/vieworders"
            variant="contained"
            aria-label="View orders"
          >
            View Orders
          </Button>
        </CardActions>
      </StandardCenteredCard>
    </StandardCenteredBox>
  );
}
