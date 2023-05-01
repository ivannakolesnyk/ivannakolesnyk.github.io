import { useTheme } from "@mui/material/styles";
import React from "react";
import Loading from "../Standard_components/Loading";
import InternalError from "../Standard_components/InternalError";
import useFetch from "../../hooks/useFetch";
import { useAuthHeaders } from "../../hooks/useAuthHeaders";
import { UserProfile } from "./ProfileBox/UserProfile";

/**
 * The ProfilePage component fetches a user's profile information and renders
 * the UserProfile component, which displays the profile data and provides
 * links to edit the profile, change the password, and view orders. If the
 * data is still being fetched, the Loading component is displayed, and if an
 * error occurs, the InternalError component is displayed.
 * @returns {JSX.Element} The JSX code for the ProfilePage component.
 */
const ProfilePage = () => {
  const theme = useTheme();
  const { headers, userEmail } = useAuthHeaders();

  const {
    data: profileData,
    isLoading,
    error,
  } = useFetch("GET", `users/${userEmail}`, headers);

  if (isLoading) {
    return <Loading aria-label="Loading profile data" />;
  }

  if (error) {
    return <InternalError aria-label="Error loading profile data" />;
  }

  return <UserProfile theme={theme} profileData={profileData} />;
};

export default ProfilePage;
