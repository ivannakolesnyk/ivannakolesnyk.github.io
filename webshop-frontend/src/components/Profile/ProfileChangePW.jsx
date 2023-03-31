import React from "react";
import ChangePassword from "../Standard_components/Profile_and_Admin/ChangePassword";

/**
 * The ProfileChangePW component is a React functional component that
 * renders the ChangePassword component with the navigateTo prop set to "/profile".
 *
 * @returns {JSX.Element} The JSX code for the ProfileChangePW component.
 */
const ProfileChangePW = () => {
  return <ChangePassword navigateTo="/profile" />;
};

export default ProfileChangePW;
