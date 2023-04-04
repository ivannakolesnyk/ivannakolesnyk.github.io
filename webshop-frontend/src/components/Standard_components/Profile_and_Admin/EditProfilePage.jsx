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
import StandardCenteredBox from "../StandardCenteredBox";
import StandardCenteredCard from "../StandardCenteredCard";
import { ProfileTextField } from "./ProfileTextField";

/**
The EditProfilePage component is a React functional component used for displaying
a form allowing users to edit their profile information. This component is
part of a user profile management system.
@returns {JSX.Element} The JSX code for the EditProfilePage component.
*/
const EditProfilePage = ({ navigateTo }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save updated profile information to database or backend service
    navigate(navigateTo);
  };

  return (
    <StandardCenteredBox>
      <StandardCenteredCard>
        <CardHeader
          title="Edit Profile Information"
          sx={{ color: "secondary.main" }}
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
                onClick={() => navigate(navigateTo)}
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

export default EditProfilePage;
