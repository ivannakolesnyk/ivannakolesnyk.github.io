import { Box, Button, CardContent, CardHeader, Divider } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StandardCenteredBox from "../StandardCenteredBox";
import StandardCenteredCard from "../StandardCenteredCard";
import { ProfileTextField } from "./ProfileTextField";

/**
 *
 * The EditProfilePage component is a React functional component used for displaying
 * a form allowing users to edit their profile information. This component is
 * part of a user profile management system.
 * @returns {JSX.Element} The JSX code for the EditProfilePage component.
 */
const EditProfilePage = ({ navigateTo }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save updated profile information to database or backend service
    navigate(navigateTo);
  };

  const createProfileTextField = (
    label,
    name,
    value,
    setValue,
    type = "text",
    required = true
  ) => (
    <ProfileTextField
      label={label}
      name={name}
      value={value}
      setValue={setValue}
      type={type}
      required={required}
    />
  );

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
            {createProfileTextField("Name", "name", name, setName)}
            {createProfileTextField("Email", "email", email, setEmail, "email")}
            {createProfileTextField("Phone", "phone", phone, setPhone)}
            {createProfileTextField("Address", "address", address, setAddress)}
            {createProfileTextField(
              "Postal Code",
              "postalCode",
              postalCode,
              setPostalCode
            )}
            {createProfileTextField("City", "city", city, setCity)}
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
