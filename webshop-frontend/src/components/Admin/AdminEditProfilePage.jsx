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
import StandardCenteredBox from "../Standard_components/StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";

/**
The AdminEditProfile component is a React functional component used for displaying
a form allowing users to edit their profile information. This component is
part of a user profile management system.
@returns {JSX.Element} The JSX code for the AdminEditProfilePage component.
*/
const AdminEditProfile = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save updated profile information to database or backend service
    navigate("/profile");
  };

  return (
    <StandardCenteredBox>
      <StandardCenteredCard>
        <CardHeader
          title="Edit Profile Information"
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
                onClick={() => navigate("/admin")}
              >
                Cancel
              </Button>
              <Box marginLeft={1}>
                <Button type="submit" variant="contained" color="primary">
                  Save Changes
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

export default AdminEditProfile;
