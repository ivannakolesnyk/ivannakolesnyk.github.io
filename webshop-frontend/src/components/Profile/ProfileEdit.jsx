import React from "react";
import EditProfilePage from "../Standard_components/Profile_and_Admin/EditProfilePage";

/**
 *
 * The ProfilePage component is a React functional component that
 * renders the EditProfilePage component with the navigateTo prop set to "/profile".
 * @returns {JSX.Element} The JSX code for the EditProfilePage component.
 */
const ProfileEdit = () => {
  return <EditProfilePage navigateTo="/profile" />;
};

export default ProfileEdit;
