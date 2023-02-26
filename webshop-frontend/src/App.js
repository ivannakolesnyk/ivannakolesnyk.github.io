import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Products from "./components/Products";
import FindUs from "./components/FindUs";
import LogIn from "./components/LogIn";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/products" element={<Products />} />
            <Route path="/findus" element={<FindUs />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
          </Routes>
        </Box>
        <Footer marginTop="auto" />
      </Box>
    </BrowserRouter>
  );
}

export default App;
