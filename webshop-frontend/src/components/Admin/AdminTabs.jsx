import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import AdminProducts from "./AdminProducts";
import AdminOrders from "./AdminOrders/AdminOrders";
import AdminTestimonials from "./AdminTestimonials";
import AdminCustomers from "./AdminCustomers";
import { AdminFrontPage } from "./AdminFrontPage";
import SwipeIcon from "@mui/icons-material/Swipe";

export function AdminTabs(props) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [value, setValue] = useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
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
          <AdminFrontPage profileData={props.profileData} />
        </TabPanel>
        <TabPanel value="1">{<AdminOrders />}</TabPanel>
        <TabPanel value="2">{<AdminProducts />}</TabPanel>
        <TabPanel value="3">{<AdminTestimonials />}</TabPanel>
        <TabPanel value="4">{<AdminCustomers />}</TabPanel>
      </TabContext>
    </Box>
  );
}
