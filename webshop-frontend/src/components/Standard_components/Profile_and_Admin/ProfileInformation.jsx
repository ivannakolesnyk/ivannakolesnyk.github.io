import {
  CardContent,
  CardHeader,
  Divider,
  List,
  Typography,
} from "@mui/material";
import { ProfileListItem } from "./ProfileListItem";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

/**
 * The ProfileInformation component displays the user's profile details in a card-like format.
 * It includes the user's name, email, phone number, and address, as well as the user ID and
 * user type. The component uses Material-UI components for layout and styling, such as
 * CardHeader, CardContent, and List.
 *
 * @returns {JSX.Element} The JSX code for the ProfileInformation component.
 */
export function ProfileInformation(props) {
  return (
    <>
      <CardHeader
        sx={{ color: props.theme.palette.primary.contrastText }}
        title="My Monoca"
        subheader="User id: 123, usertype" //customer can be changed to admin if it's an admin
      />
      <Divider />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: props.theme.palette.primary.contrastText }}
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
    </>
  );
}
