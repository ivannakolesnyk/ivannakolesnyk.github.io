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
import cookie from "cookie";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ProfileInformation } from "../Standard_components/Profile_and_Admin/ProfileInformation";
import StandardCenteredBox from "../Standard_components/StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";
import Loading from "../Standard_components/Loading";
import InternalError from "../Standard_components/InternalError";

const ProfilePage = () => {
  const theme = useTheme();
  const { getJwtPayload } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const payload = getJwtPayload();
        if (payload) {
          const userEmail = payload.sub; // Replace 'sub' with the claim name containing the user's email
          const jwt = cookie.parse(document.cookie).jwt;

          const response = await fetch(
            `http://localhost:8080/api/users/${userEmail}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            setProfileData({ ...data, userEmail });
          } else {
            console.error("Error fetching profile data:", response.status);
            setFetchError(true);
          }
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setFetchError(true);
      }
      setIsLoading(false);
    };

    fetchProfileData();
  }, [getJwtPayload]);

  if (isLoading) {
    return <Loading />;
  }

  if (fetchError) {
    return <InternalError />;
  }

  return (
    <>
      {profileData ? (
        <StandardCenteredBox>
          <StandardCenteredCard>
            <ProfileInformation theme={theme} profileData={profileData} />
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button component={Link} to="/profile/edit" variant="contained">
                Edit Profile
              </Button>
              <Button
                component={Link}
                to="/profile/changepw"
                variant="contained"
              >
                Change password
              </Button>
            </CardActions>
            <Divider />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "secondary.main" }}
              >
                Orders
              </Typography>
              <Typography variant="body2">
                Here you can view your orders.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button
                component={Link}
                to="/profile/vieworders"
                variant="contained"
              >
                View Orders
              </Button>
            </CardActions>
          </StandardCenteredCard>
        </StandardCenteredBox>
      ) : null}
    </>
  );
};

export default ProfilePage;
