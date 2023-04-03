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
import Frontpage from "./components/Frontpage";
import LogIn from "./components/LogIn/LogIn";
import RegisterNewUser from "./components/LogIn/RegisterNewUser";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./components/Products/ProductDetails";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";
import ProfileChangePW from "./components/Profile/ProfileChangePW";
import ProfileEdit from "./components/Profile/ProfileEdit";
import ProfileViewOrders from "./components/Profile/ProfileViewOrders";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowAllProducts(false);
  };

  const handleProductsClick = () => {
    setShowAllProducts(true);
  };

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
        <Navbar
          onProductsClick={handleProductsClick}
          loggedIn={loggedIn}
          handleLogout={handleLogout}
        />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Frontpage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route
              path="/products"
              element={
                <Products
                  selectedCategory={selectedCategory}
                  showAllProducts={showAllProducts}
                  onCategoryClick={handleCategoryClick}
                />
              }
            />
            <Route path="/products/:id" element={<ProductDetails />} />
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
          </Routes>
        </Box>
        <Footer marginTop="auto" />
      </Box>
    </BrowserRouter>
  );
}

export default App;
