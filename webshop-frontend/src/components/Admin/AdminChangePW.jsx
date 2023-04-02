import React from "react";
import ChangePassword from "../Standard_components/Profile_and_Admin/ChangePassword";

/**
 * The AdminChangePW component is a React functional component that
 * renders the ChangePassword component with the navigateTo prop set to "/admin".
 *
 * @returns {JSX.Element} The JSX code for the AdminChangePW component.
 */
const AdminChangePW = () => {
  return <ChangePassword navigateTo="/admin" />;
};

export default AdminChangePW;
