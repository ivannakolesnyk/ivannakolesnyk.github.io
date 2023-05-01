import React, { useState } from "react";
import { Box } from "@mui/material";
import OrderTable from "../../Standard_components/Profile_and_Admin/Orders/OrderTable";
import TitledBox from "../../Standard_components/TitledBox";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../Standard_components/Loading";
import InternalError from "../../Standard_components/InternalError";
import { useAuthHeaders } from "../../../hooks/useAuthHeaders";
import { AdminOrderDialog } from "./AdminOrderDialog/AdminOrderDialog";

/**
 *
 * AdminOrders is a React functional component used for managing and displaying
 * orders in the admin panel. The component renders a table with a list of orders and
 * utilizes an AdminOrderDialog component to display order details. This dialog
 * allows admins to view order details, change the status of orders, and delete orders.
 * @returns {JSX.Element} The JSX code for the AdminOrders component.
 */

const AdminOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const { headers } = useAuthHeaders();

  const {
    data: orders,
    isLoading,
    error,
    refetch: fetchData,
  } = useFetch("GET", `orders`, headers);

  const { refetch: updateStatus } = useFetch(
    "PUT",
    `orders/${selectedOrder?.id}`,
    headers,
    null,
    null,
    false
  );

  const { refetch: deleteOrder } = useFetch(
    "DELETE",
    `orders/${selectedOrder?.id}`,
    headers,
    null,
    null,
    false
  );

  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;
    setSelectedOrder((prevOrder) => {
      return {
        ...prevOrder,
        status: newStatus,
      };
    });

    await updateStatus({ status: newStatus });
    await fetchData();
    handleClose();
  };

  const handleDelete = async () => {
    if (window.confirm("Delete order?")) {
      // Delete the order
      await deleteOrder();
      // Refetch the orders
      await fetchData();
      // Close the dialog
      handleClose();
    }
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleClose = () => {
    setSelectedOrder(null);
  };

  if (isLoading) return <Loading />;
  if (error) return <InternalError />;

  return (
    <Box
      sx={{ p: { xs: 2, md: 4 } }}
      component={"section"}
      aria-label="Admin orders"
    >
      <TitledBox title="Orders" />
      <OrderTable orders={orders} handleOrderClick={handleOrderClick} />
      <AdminOrderDialog
        value={selectedOrder}
        onClose={handleClose}
        onChange={handleStatusChange}
        onClick={handleDelete}
      />
    </Box>
  );
};

export default AdminOrders;
