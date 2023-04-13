import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useContext, useEffect, useState } from "react";
import { ProfileInformation } from "../Standard_components/Profile_and_Admin/ProfileInformation";
import cookie from "cookie";
import Loading from "../Standard_components/Loading";
import InternalError from "../Standard_components/InternalError";
import { AuthContext } from "../../context/AuthContext";
import StandardCenteredBox from "../Standard_components/StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";
import { Button, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import AdminProducts from "./AdminProducts";
import AdminOrders from "./AdminOrders";
import AdminTestimonials from "./AdminTestimonials";

/**
 *
 *  The Admin component displays an admin's profile information and provides
 * links to edit the profile, change the password, and view orders. The user's
 * profile information is displayed in a Card component, with each piece of
 * information shown as a ListItem.
 * @returns {JSX.Element} The JSX code for the Admin component.
 */

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Admin = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="secondary"
        centered
      >
        <Tab label="Profile" />
        <Tab label="Orders" />
        <Tab label="Products" />
        <Tab label="Testimonials" />
      </Tabs>
      <TabPanel value={value} index={0}>
        {
          <StandardCenteredBox>
            <StandardCenteredCard title="Admin page">
              <ProfileInformation profileData={profileData} />
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button component={Link} to="/admin/edit" variant="contained">
                  Edit Profile
                </Button>
                <Button
                  component={Link}
                  to="/admin/changepw"
                  variant="contained"
                >
                  Change password
                </Button>
              </CardActions>
            </StandardCenteredCard>
          </StandardCenteredBox>
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        {<AdminOrders />}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {<AdminProducts />}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {<AdminTestimonials />}
      </TabPanel>
    </Box>
  );
};

export default Admin;
