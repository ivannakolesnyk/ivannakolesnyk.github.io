import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { AuthContext } from "../../context/AuthContext";
import cookie from "cookie";
import useFetch from "../../hooks/useFetch";

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

  const { data, isLoading, error, refetch, fetched } = useFetch(
    "POST",
    "authenticate",
    { "Content-Type": "application/json" },
    {},
    { email, password },
    false
  );

  useEffect(() => {
    if (fetched) {
      const token = data.jwt;
      document.cookie = cookie.serialize("jwt", token, {
        maxAge: getJwtPayload.exp,
        path: "/",
      });
      handleLogin();
      getJwtPayload().roles.some((role) => role.authority === "ROLE_ADMIN")
        ? navigate("/admin")
        : navigate("/profile");
    }
  }, [fetched, data, getJwtPayload, handleLogin, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ mt: "4rem", mb: "2rem" }}>
        <LoginBox
          elevation={3}
          component="form"
          onSubmit={handleSubmit}
          aria-label="Login form"
        >
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
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            aria-label="Email input"
          />
          <StyledTextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password input"
          />
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
            aria-label="Login button"
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Login"
            )}
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
              aria-label="Sign up link"
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
