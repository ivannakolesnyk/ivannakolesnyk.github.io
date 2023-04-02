import React from "react";
import EditProfilePage from "../Standard_components/Profile_and_Admin/EditProfilePage";

/**
 * The AdminEdit component is a React functional component that
 * renders the EditProfilePage component with the navigateTo prop set to "/admin".
 *
 * @returns {JSX.Element} The JSX code for the AdminEdit component.
 */
const AdminEdit = () => {
  return <EditProfilePage navigateTo="/admin" />;
};

export default AdminEdit;
