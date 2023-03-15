import React from "react";
import {
  TextField,
  Button,
  Link,
  Typography,
  Box,
  Container,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

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

const Login = () => {
  // Import the custom theme from theme.js
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ mt: "4rem" }}>
        <LoginBox elevation={3}>
          <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
            Login
          </Typography>
          <StyledTextField label="Email" type="email" />
          <StyledTextField label="Password" type="password" />
          <StyledButton variant="contained" color="primary">
            Login
          </StyledButton>
          <Typography
            sx={{
              marginTop: "1rem",
              color: theme.palette.primary.contrastText,
            }}
          >
            Don't have an account?{" "}
            <Link href="#" sx={{ color: theme.palette.primary.contrastText }}>
              Sign up here.
            </Link>
          </Typography>
        </LoginBox>
      </Box>
    </Container>
  );
};

export default Login;
