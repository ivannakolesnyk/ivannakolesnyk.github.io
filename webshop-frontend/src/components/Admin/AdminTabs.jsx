import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import AdminProducts from "./AdminProducts/AdminProducts";
import AdminOrders from "./AdminOrders/AdminOrders";
import AdminTestimonials from "./AdminTestimonials/AdminTestimonials";
import AdminCustomers from "./AdminCustomers/AdminCustomers";
import { AdminProfile } from "./AdminProfile/AdminProfile";
import SwipeIcon from "@mui/icons-material/Swipe";

/**
 *
 * AdminTabs is a responsive React component designed to display a set of tabs
 * with various admin-related content, such as Profile, Orders, Products,
 * Testimonials, and Customers. The component adjusts its behavior for mobile
 * and non-mobile devices.
 * @param {Object} props - The properties passed to the component
 * @param {Object} props.profileData - The data to be passed to the AdminProfile component
 * @returns {JSX.Element} The JSX code for the AdminTabs component.
 */
export function AdminTabs(props) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [value, setValue] = useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ paddingTop: 2, width: isMobile ? "380px" : "100%" }}
        >
          <TabList
            aria-label="admin navigation tabs"
            onChange={handleChange}
            indicatorColor="primary"
            textColor="secondary"
            variant={isMobile ? "scrollable" : undefined}
            scrollButtons={isMobile ? "auto" : undefined}
            centered={!isMobile}
          >
            <Tab label="Profile" value="0" />
            <Tab label="Orders" value="1" />
            <Tab label="Products" value="2" />
            <Tab label="Testimonials" value="3" />
            <Tab label="Customers" value="4" />
          </TabList>
          {isMobile ? (
            <SwipeIcon
              aria-label="use swipe"
              sx={{ pl: 2, pt: 1, color: "secondary.main" }}
            />
          ) : null}
        </Box>
        <TabPanel value="0">
          <AdminProfile profileData={props.profileData} />
        </TabPanel>
        <TabPanel value="1">{<AdminOrders />}</TabPanel>
        <TabPanel value="2">{<AdminProducts />}</TabPanel>
        <TabPanel value="3">{<AdminTestimonials />}</TabPanel>
        <TabPanel value="4">{<AdminCustomers />}</TabPanel>
      </TabContext>
    </Box>
  );
}
