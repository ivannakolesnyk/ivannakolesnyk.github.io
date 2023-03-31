import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Frontpage from "./components/Frontpage";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Products from "./components/Products/Products";
import FindUs from "./components/FindUs";
import Profile from "./components/Profile/Profile";
import ProfileEdit from "./components/Profile/ProfileEdit";
import ProfileChangePassword from "./components/Profile/ProfileChangePassword";
import ProfileViewOrders from "./components/Profile/ProfileViewOrders";
import LogIn from "./components/LogIn";
import ShoppingCart from "./components/ShoppingCart";
import RegisterNewUser from "./components/RegisterNewUser";
import Admin from "./components/Admin/Admin";
import AdminChangePassword from "./components/Admin/AdminChangePassword";
import AdminEditProfilePage from "./components/Admin/AdminEdit";
import AdminTestimonials from "./components/Admin/AdminTestimonials";
import AdminViewOrders from "./components/Admin/AdminViewOrders";
import AdminProducts from "./components/Admin/AdminProducts";

import { useState } from "react";
import ProductDetails from "./components/Products/ProductDetails";

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

  return (
    <BrowserRouter>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar onProductsClick={handleProductsClick} />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Frontpage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route
              path="/product"
              element={
                <Products
                  selectedCategory={selectedCategory}
                  showAllProducts={showAllProducts}
                  onCategoryClick={handleCategoryClick}
                />
              }
            />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/findus" element={<FindUs />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<RegisterNewUser />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
            <Route path="/profile/changepw" element={<ProfileChangePassword />} />
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
