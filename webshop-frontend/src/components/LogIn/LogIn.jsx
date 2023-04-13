import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import cookie from "cookie";

const LoginBox = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem",
  maxWidth: "30rem",
  margin: "auto",
});

const StyledTextField = styled(TextField)({
  marginBottom: "1rem",
  width: "100%",
});

const StyledButton = styled(Button)({
  marginTop: "1rem",
  width: "100%",
});

/**
 *
 * The Login component is a form that allows users to log in to the website.
 * It displays two fields (email and password) for the user to fill in and a "Login"
 * button to submit the form.If the user does not have an account, there is a link
 * to the registration page.
 * @returns {JSX.Element} The JSX code for the Login component.
 */
const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, getJwtPayload } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/authenticate",
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        const token = response.data.jwt;
        //TODO: Remember to adjust the expiration date in the backend
        document.cookie = cookie.serialize("jwt", token, {
          maxAge: 1 * 24 * 60 * 60,
        }); // Set the JWT in a cookie with a 7-day expiration
        handleLogin();
        getJwtPayload().roles.some((role) => role.authority === "ROLE_ADMIN")
          ? navigate("/admin")
          : navigate("/profile");
      }
    } catch (error) {
      console.error("Invalid username or password");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ mt: "4rem", mb: "2rem" }}>
        <LoginBox elevation={3} component="form" onSubmit={handleSubmit}>
          <Typography
            variant="h4"
            sx={{ color: "secondary.main", marginBottom: "2rem" }}
          >
            Login
          </Typography>
          <StyledTextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledTextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton type="submit" variant="contained" color="primary">
            Login
          </StyledButton>
          <Typography
            sx={{
              marginTop: "1rem",
              color: "secondary.main",
            }}
          >
            Don't have an account?{" "}
            <Link
              to={"/register"}
              style={{ textDecoration: "underline" }}
              sx={{ color: "secondary.main" }}
            >
              Sign up here.
            </Link>
          </Typography>
        </LoginBox>
      </Box>
    </Container>
  );
};

export default Login;
