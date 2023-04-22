import React, { useMemo } from "react";
import TitledBox from "../../Standard_components/TitledBox";
import { Box } from "@mui/system";
import CustomerTable from "./CustomerTable";
import useFetch from "../../../hooks/useFetch";
import cookie from "cookie";
import Loading from "../../Standard_components/Loading";
import InternalError from "../../Standard_components/InternalError";

/**
 *
 * The AdminCustomers component is a React functional component used for showing
 * all the customers in the database, with the option to delete a customer
 * from the database.
 * @returns {JSX.Element} The JSX code for the AdminTestimonials component.
 */
const AdminCustomers = () => {
  const jwt = cookie.parse(document.cookie).jwt;
  const headers = useMemo(
    () => ({
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    }),
    [jwt]
  );
  const {
    data: customers,
    isLoading,
    error,
  } = useFetch("GET", "users", headers);

  if (isLoading) return <Loading />;
  if (error) return <InternalError />;

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <TitledBox title="Customers" />
      <CustomerTable customers={customers} />
    </Box>
  );
};

export default AdminCustomers;
