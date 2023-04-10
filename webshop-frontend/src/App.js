import { Box } from "@mui/material";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  // handle logging in and out, keeping track of the state
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Frontpage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/products/:id"
              element={<ProductDetails loggedIn={loggedIn} />}
            />
            <Route path="/findus" element={<FindUs />} />
            <Route
              path="/login"
              element={<LogIn handleLogin={handleLogin} />}
            />
            <Route path="/register" element={<RegisterNewUser />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
            <Route path="/profile/changepw" element={<ProfileChangePW />} />
            <Route path="/profile/vieworders" element={<ProfileViewOrders />} />
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
