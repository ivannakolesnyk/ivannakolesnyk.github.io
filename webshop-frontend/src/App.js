import { Box } from "@mui/material";
import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Admin from "./components/Admin/Admin";
import AdminChangePassword from "./components/Admin/AdminChangePW";
import AdminEditProfilePage from "./components/Admin/AdminEdit";
import FindUs from "./components/FindUs/FindUs";
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
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import NotFound from "./components/Standard_components/NotFound";
import { AuthContext } from "./context/AuthContext";
import InternalError from "./components/Standard_components/InternalError";
import { isLoggedInAndAdmin, isLoggedInAndNotAdmin } from "./utils/auth/auth";

function App() {
  const { loggedIn, getJwtPayload } = useContext(AuthContext);

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
            {isLoggedInAndNotAdmin(loggedIn, getJwtPayload) ? (
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
              !loggedIn && (
                <>
                  <Route path="/profile/*" element={<Navigate to="/login" />} />
                  <Route path="/login" element={<LogIn />} />
                  <Route path="/register" element={<RegisterNewUser />} />
                </>
              )
            )}

            {isLoggedInAndAdmin(loggedIn, getJwtPayload) ? (
              <>
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/edit" element={<AdminEditProfilePage />} />
                <Route
                  path="/admin/changepw"
                  element={<AdminChangePassword />}
                />
                <Route path="/profile/*" element={<Navigate to="/admin" />} />
                <Route path="/login" element={<Navigate to="/admin" />} />
                <Route path="/register" element={<Navigate to="/admin" />} />
              </>
            ) : (
              //   TODO: Change this to Unauthorized
              <Route path="/admin/*" element={<InternalError />} />
            )}

            {/*Must always be at the bottom of <Routes>*/}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
        <Footer marginTop="auto" />
      </Box>
    </BrowserRouter>
  );
}

export default App;
