import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Frontpage from "./components/Frontpage";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Products from "./components/Products";
import FindUs from "./components/FindUs";
import Profile from "./components/Profile";
import EditProfilePage from "./components/EditProfilePage";
import ChangePassword from "./components/ChangePassword";
import ViewOrders from "./components/ViewOrders";
import LogIn from "./components/LogIn";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";

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
              path="/products"
              element={
                <Products
                  selectedCategory={selectedCategory}
                  showAllProducts={showAllProducts}
                  onCategoryClick={handleCategoryClick}
                />
              }
            />
            <Route path="/findus" element={<FindUs />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfilePage />} />
            <Route path="/profile/changepw" element={<ChangePassword />} />
            <Route path="/profile/vieworders" element={<ViewOrders />} />
          </Routes>
        </Box>
        <Footer marginTop="auto" />
      </Box>
    </BrowserRouter>
  );
}

export default App;
