import React, { useContext, useEffect, useState } from "react";
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
import cookie from "cookie";
import Loading from "../Standard_components/Loading";
import InternalError from "../Standard_components/InternalError";
import { AuthContext } from "../../context/AuthContext";

/**
 *
 *  The Admin component displays an admin's profile information and provides
 * links to edit the profile, change the password, and view orders. The user's
 * profile information is displayed in a Card component, with each piece of
 * information shown as a ListItem.
 * @returns {JSX.Element} The JSX code for the Admin component.
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
          console.log(jwt);
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
    <StandardCenteredBox>
      <StandardCenteredCard>
        <ProfileInformation theme={theme} profileData={profileData} />
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
