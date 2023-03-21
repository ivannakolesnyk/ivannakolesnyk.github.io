import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StandardCenteredBox from "./Profile/Profile_components/StandardCenteredBox";
import StandardCenteredCard from "./Profile/Profile_components/StandardCenteredCard";

/**
The RegisterNewUser component is a React functional component used for displaying
a form allowing users to edit their profile information. This component is
part of a user profile management system.
@returns {JSX.Element} The JSX code for the RegisterNewUser component.
*/
const RegisterNewUser = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");

  const passwordsMatch = () => password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save updated profile information to database or backend service
    navigate("/profile");
  };

  return (
    <StandardCenteredBox>
      <StandardCenteredCard>
        <CardHeader
          title="Register New User"
          sx={{ color: theme.palette.primary.contrastText }}
        />
        <Divider />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <ProfileTextField
              label="Name"
              name="name"
              value={name}
              setValue={setName}
              required
            />
            <ProfileTextField
              label="Email"
              name="email"
              value={email}
              setValue={setEmail}
              type="email"
              required
            />
            <ProfileTextField
              label="Password"
              name="password"
              value={password}
              setValue={setPassword}
              type="password"
              required
            />
            <ProfileTextField
              label="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              setValue={setConfirmPassword}
              type="password"
              required
              error={!passwordsMatch()}
              helperText={!passwordsMatch() && "Passwords do not match"}
            />
            <ProfileTextField
              label="Phone"
              name="phone"
              value={phone}
              setValue={setPhone}
              required
            />
            <ProfileTextField
              label="Postal Code"
              name="postalCode"
              value={postalCode}
              setValue={setPostalCode}
              required
            />
            <ProfileTextField
              label="Address"
              name="address"
              value={address}
              setValue={setAddress}
              required
            />
            <Box display="flex" justifyContent="flex-end" marginTop={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/login")}
              >
                Cancel
              </Button>
              <Box marginLeft={1}>
                <Button type="submit" variant="contained" color="primary">
                  Register
                </Button>
              </Box>
            </Box>
          </form>
        </CardContent>
      </StandardCenteredCard>
    </StandardCenteredBox>
  );
};

/**
The ProfileTextField is a custom constant that wraps the TextField component from 
the Material-UI library. It is designed to streamline the rendering of text fields 
with common configurations and to reduce repetition
*/
const ProfileTextField = ({ label, value, setValue, ...props }) => (
  <TextField
    fullWidth
    label={label}
    margin="normal"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    {...props}
  />
);

export default RegisterNewUser;
