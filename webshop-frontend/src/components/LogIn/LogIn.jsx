import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

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
  const { handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const tempHandleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
    handleLogin();
  };

  /*  Use this code when login API is ready:
    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        // Store the token in local storage or a state management library (e.g., Redux)
        localStorage.setItem("token", token);
      } else {
        // Handle error response
        console.error("Login failed");
      }
    } catch (err) {
      console.error("Error during login:", err);
    }
  }; */

  return (
    <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ mt: "4rem", mb: "2rem" }}>
        <LoginBox elevation={3} component="form" onSubmit={tempHandleSubmit}>
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
