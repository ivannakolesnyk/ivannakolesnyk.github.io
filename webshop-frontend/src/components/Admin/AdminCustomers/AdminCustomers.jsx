import React, { useEffect, useMemo, useState } from "react";
import TitledBox from "../../Standard_components/TitledBox";
import { Box } from "@mui/system";
import CustomerTable from "./CustomerTable";
import useFetch from "../../../hooks/useFetch";
import cookie from "cookie";
import Loading from "../../Standard_components/Loading";
import InternalError from "../../Standard_components/InternalError";
import {useAuthHeaders} from "../../../hooks/useAuthHeaders";

/**
 *
 * The AdminCustomers component is a React functional component used for showing
 * all the customers in the database, with the option to delete a customer
 * from the database.
 * @returns {JSX.Element} The JSX code for the AdminTestimonials component.
 */
const AdminCustomers = () => {
  const { headers } = useAuthHeaders();

  const {
    data: customers,
    isLoading,
    error,
    refetch: refetchUsers,
  } = useFetch("GET", "users", headers);

  const [emailToDelete, setEmailToDelete] = useState(null);
  const { refetch: refetchDelete } = useFetch(
    "DELETE",
    emailToDelete ? `users/${emailToDelete}` : null,
    headers,
    null,
    null,
    false
  );

  useEffect(() => {
    const deleteAndRefetch = async () => {
      if (emailToDelete) {
        await refetchDelete();
        setEmailToDelete(null);
        await refetchUsers();
      }
    };

    if (emailToDelete) {
      deleteAndRefetch();
    }
  }, [emailToDelete, refetchDelete, refetchUsers]);

  const handleDelete = (email) => {
    setEmailToDelete(email);
  };

  if (isLoading) return <Loading />;
  if (error) return <InternalError />;

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <TitledBox title="Customers" />
      <CustomerTable customers={customers} handleDelete={handleDelete} />
    </Box>
  );
};

export default AdminCustomers;
