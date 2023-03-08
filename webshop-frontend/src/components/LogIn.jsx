import React, { useState } from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const LogIn = () => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Typography
          sx={{
            color: theme.palette.primary.contrastText,
          }}
        >
          Email:
        </Typography>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <Typography
          sx={{
            color: theme.palette.primary.contrastText,
          }}
        >
          Password:
        </Typography>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogIn;
