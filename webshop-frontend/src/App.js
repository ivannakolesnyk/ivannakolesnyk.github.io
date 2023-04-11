import { Box } from "@mui/material";
import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Admin from "./components/Admin/Admin";
import AdminChangePassword from "./components/Admin/AdminChangePW";
import AdminEditProfilePage from "./components/Admin/AdminEdit";
import AdminProducts from "./components/Admin/AdminProducts";
import AdminTestimonials from "./components/Admin/AdminTestimonials";
import AdminViewOrders from "./components/Admin/AdminViewOrders";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import Frontpage from "./components/Home/Frontpage";
import LogIn from "./components/LogIn/LogIn";
import RegisterNewUser from "./components/LogIn/RegisterNewUser";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./components/Products/Product/ProductDetails";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";
import ProfileChangePW from "./components/Profile/ProfileChangePW";
import ProfileEdit from "./components/Profile/ProfileEdit";
import ProfileViewOrders from "./components/Profile/ProfileViewOrders";
import ShoppingCart from "./components/ShoppingCart";
import NotFound from "./components/Standard_components/NotFound";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Frontpage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/findus" element={<FindUs />} />

            <Route path="/shoppingcart" element={<ShoppingCart />} />
            {loggedIn ? (
              <>
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/profile/vieworders"
                  element={<ProfileViewOrders />}
                />
                <Route path="/profile/edit" element={<ProfileEdit />} />
                <Route path="/profile/changepw" element={<ProfileChangePW />} />
                <Route path="/login" element={<Navigate to="/profile" />} />
                <Route path="/register" element={<Navigate to="/profile" />} />
              </>
            ) : (
              <>
                <Route path="/profile/*" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/register" element={<RegisterNewUser />} />
              </>
            )}
            {/* TODO: restrict access to admin too. (user.role) */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/edit" element={<AdminEditProfilePage />} />
            <Route path="/admin/changepw" element={<AdminChangePassword />} />
            <Route path="/admin/vieworders" element={<AdminViewOrders />} />
            <Route path="/admin/testimonials" element={<AdminTestimonials />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
        <Footer marginTop="auto" />
      </Box>
    </BrowserRouter>
  );
}

export default App;
