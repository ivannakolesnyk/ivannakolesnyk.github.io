/**
 *
 * The ProfilePage component displays a user's profile information and provides
 * links to edit the profile, change the password, and view orders. The user's
 * profile information is displayed in a Card component, with each piece of
 * information shown as a ListItem.
 * @returns {JSX.Element} The JSX code for the ProfilePage component.
 */
import {
  Button,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import { ProfileInformation } from "../Standard_components/Profile_and_Admin/ProfileInformation";
import StandardCenteredBox from "../Standard_components/StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";
import Loading from "../Standard_components/Loading";
import InternalError from "../Standard_components/InternalError";
import useFetch from "../../hooks/useFetch";
import { useAuthHeaders } from "../../hooks/useAuthHeaders";

const ProfilePage = () => {
  const theme = useTheme();
  const { headers, userEmail } = useAuthHeaders();

  const {
    data: profileData,
    isLoading,
    error,
  } = useFetch("GET", `users/${userEmail}`, headers);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <InternalError />;
  }

  return (
    <StandardCenteredBox>
      <StandardCenteredCard title="My Monoca">
        <Divider />
        <ProfileInformation theme={theme} profileData={profileData} />
        <CardActions sx={{ justifyContent: "flex-end", paddingBottom: 2 }}>
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
            variant="h6"
            component="div"
            sx={{ color: "secondary.main" }}
          >
            Orders
          </Typography>
          <Typography variant="body2">
            Here you can view your orders.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end", paddingBottom: 2 }}>
          <Button component={Link} to="/profile/vieworders" variant="contained">
            View Orders
          </Button>
        </CardActions>
      </StandardCenteredCard>
    </StandardCenteredBox>
  );
};

export default ProfilePage;
