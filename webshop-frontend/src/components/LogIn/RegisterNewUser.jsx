import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, CardContent, CardHeader, Divider } from "@mui/material";
import StandardCenteredBox from "../Standard_components//StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";
import { ProfileTextField } from "../Standard_components/Profile_and_Admin/ProfileTextField";
import axios from "axios";

/**
 *
 * The RegisterNewUser component is a React functional component used for displaying
 * a form allowing users to edit their profile information. This component is
 * part of a user profile management system.
 * @returns {JSX.Element} The JSX code for the RegisterNewUser component.
 */
const RegisterNewUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  // Used to check if the passwords are similar
  const passwordsMatch = () => password === confirmPassword;
  // Used to make sure message for dissimilar passwords on show after confirm new PW field is touched
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordsMatch()) {
      //TODO: Show an error message or handle the case when passwords don't match
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/signup", {
        name,
        email,
        password,
        phone_number: phone,
        postal_code: postalCode,
        address,
        city: city, // Add city to state if it's required
      });

      if (response.status === 200) {
        // Redirect to the login page, assuming registration was successful
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration error:", error.response.data);
      // Show an error message or handle the error
    }
  };

  const profileFields = [
    {
      label: "Name",
      name: "name",
      value: name,
      setValue: setName,
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      value: email,
      setValue: setEmail,
      type: "email",
    },
    {
      //TODO: make sure it is at least 6 characters!
      label: "Password",
      name: "password",
      value: password,
      setValue: setPassword,
      type: "password",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      value: confirmPassword,
      setValue: setConfirmPassword,
      type: "password",
      error: !passwordsMatch() && confirmPasswordTouched,
      helperText:
        !passwordsMatch() && confirmPasswordTouched && "Passwords do not match",
      onFocus: () => setConfirmPasswordTouched(true),
    },
    {
      label: "Phone",
      name: "phone",
      value: phone,
      setValue: setPhone,
      type: "text",
    },
    {
      label: "Postal Code",
      name: "postalCode",
      value: postalCode,
      setValue: setPostalCode,
      type: "text",
    },
    {
      label: "Address",
      name: "address",
      value: address,
      setValue: setAddress,
      type: "text",
    },
    {
      label: "City",
      name: "city",
      value: city,
      setValue: setCity,
      type: "text",
    },
  ];

  return (
    <StandardCenteredBox>
      <StandardCenteredCard>
        <CardHeader
          title="Register New User"
          sx={{ color: "secondary.main" }}
        />
        <Divider />
        <CardContent>
          <form onSubmit={handleSubmit}>
            {profileFields.map((field) => (
              <ProfileTextField
                key={field.name}
                label={field.label}
                name={field.name}
                value={field.value}
                setValue={field.setValue}
                type={field.type}
                required
                error={field.error}
                helperText={field.helperText}
                onFocus={field.onFocus}
              />
            ))}
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

export default RegisterNewUser;
