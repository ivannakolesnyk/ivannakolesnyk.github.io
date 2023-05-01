import StandardCenteredBox from "../../Standard_components/StandardCenteredBox";
import StandardCenteredCard from "../../Standard_components/StandardCenteredCard";
import { Button, CardActions, Divider } from "@mui/material";
import { ProfileInformation } from "../../Standard_components/Profile_and_Admin/ProfileInformation";
import { Link } from "react-router-dom";
import React from "react";

/**
 *
 * AdminProfile is a React component that renders the Admin Front Page, which
 * includes profile information, an Edit Profile button, and a Change Password button.
 * @param {Object} props - The properties passed to the component
 * @param {Object} props.profileData - The data to be displayed in the ProfileInformation component
 * @returns {JSX.Element} The JSX code for the AdminProfile component
 */
export function AdminProfile(props) {
  return (
    <>
      {
        <StandardCenteredBox>
          <StandardCenteredCard title="Admin page">
            <Divider />
            <ProfileInformation profileData={props.profileData} />
            <CardActions sx={{ justifyContent: "flex-end", paddingBottom: 2 }}>
              <Button
                component={Link}
                to="/admin/edit"
                variant="contained"
                aria-label="Edit profile"
              >
                Edit Profile
              </Button>
              <Button
                component={Link}
                to="/admin/changepw"
                variant="contained"
                aria-label="Change password"
              >
                Change password
              </Button>
            </CardActions>
          </StandardCenteredCard>
        </StandardCenteredBox>
      }
    </>
  );
}
