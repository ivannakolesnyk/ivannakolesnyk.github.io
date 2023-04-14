import { CardContent, Divider, List, Typography } from "@mui/material";
import { ProfileListItem } from "./ProfileListItem";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

/**
 *
 * The ProfileInformation component displays the user's profile details in a card-like format.
 * It includes the user's name, email, phone number, and address, as well as the user ID and
 * user type. The component uses Material-UI components for layout and styling, such as
 * CardHeader, CardContent, and List.
 * @returns {JSX.Element} The JSX code for the ProfileInformation component.
 */
export function ProfileInformation({ profileData }) {
  const { name, email, phone_number, postal_code, address, city } = profileData;
  const profileItems = [
    {
      icon: <PersonIcon sx={{ color: "secondary.main" }} />,
      primary: "Name",
      secondary: name,
    },
    {
      icon: <EmailIcon sx={{ color: "secondary.main" }} />,
      primary: "Email",
      secondary: email,
    },
    {
      icon: <PhoneIcon sx={{ color: "secondary.main" }} />,
      primary: "Phone",
      secondary: phone_number,
    },
    {
      icon: <LocationOnIcon sx={{ color: "secondary.main" }} />,
      primary: "Address",
      secondary: `${address}, ${postal_code} ${city}`,
    },
  ];

  return (
    <>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ color: "secondary.main" }}
        >
          Profile Information
        </Typography>
        <Divider />
        <List>
          {profileItems.map((item) => (
            <ProfileListItem
              key={item.primary}
              icon={item.icon}
              primary={item.primary}
              secondary={item.secondary}
            />
          ))}
        </List>
      </CardContent>
    </>
  );
}
