import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, {useMemo, useState} from "react";
import {ProfileInformation} from "../Standard_components/Profile_and_Admin/ProfileInformation";
import cookie from "cookie";
import Loading from "../Standard_components/Loading";
import InternalError from "../Standard_components/InternalError";
import StandardCenteredBox from "../Standard_components/StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";
import {Button, CardActions, Divider, useMediaQuery} from "@mui/material";
import {Link} from "react-router-dom";
import AdminProducts from "./AdminProducts";
import AdminOrders from "./AdminOrders/AdminOrders";
import AdminTestimonials from "./AdminTestimonials";
import AdminCustomers from "./AdminCustomers";
import jwt_decode from "jwt-decode";
import useFetch from "../../hooks/useFetch";

/**
 *
 * The Admin component displays an admin's profile information and provides
 * links to edit the profile and change the password. It also provides
 * tabs for orders, products, testimonials and customers. The user's
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
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
};

const Admin = () => {
  const mediumViewport = useMediaQuery("(max-width:640px)");
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const jwt = cookie.parse(document.cookie).jwt;
  const payload = jwt_decode(jwt);
  const userEmail = payload ? payload.sub : ""; // Replace 'sub' with the claim name containing the user's email

  const headers = useMemo(
    () => ({
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    }),
    [jwt]
  );

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
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="secondary"
        orientation={mediumViewport ? "vertical" : "horizontal"}
        centered
        sx={{ paddingTop: 2 }}
      >
        <Tab label="Profile" />
        <Tab label="Orders" />
        <Tab label="Products" />
        <Tab label="Testimonials" />
        <Tab label="Customers" />
      </Tabs>
      <TabPanel value={value} index={0}>
        {
          <StandardCenteredBox>
            <StandardCenteredCard title="Admin page">
              <Divider />
              <ProfileInformation profileData={profileData} />
              <CardActions
                sx={{ justifyContent: "flex-end", paddingBottom: 2 }}
              >
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
      <TabPanel value={value} index={4}>
        {<AdminCustomers />}
      </TabPanel>
    </Box>
  );
};

export default Admin;
