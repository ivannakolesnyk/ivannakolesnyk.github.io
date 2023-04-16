import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
} from "@mui/material";
import StandardCenteredBox from "../Standard_components//StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";
import { ProfileTextField } from "../Standard_components/Profile_and_Admin/ProfileTextField";
import useFetch from "../../hooks/useFetch";

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
  const [errorMessage, setErrorMessage] = useState(null);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const { isLoading, error, refetch, fetched } = useFetch(
    "POST",
    "signup",
    { "Content-Type": "application/json" },
    {},
    {
      name,
      email,
      password,
      phone_number: phone,
      postal_code: postalCode,
      address,
      city: city,
    },
    false
  );

  useEffect(() => {
    if (!error && fetched) {
      navigate("/login");
    } else if (error) {
      setErrorMessage("Registration error, please try again.");
    }
  }, [fetched, error, navigate]);

  const passwordsMatch = () => password === confirmPassword;

  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordsMatch()) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    refetch();
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
      label: "Password",
      name: "password",
      value: password,
      setValue: setPassword,
      type: "password",
      error: password.length < 6 && passwordTouched,
      helperText:
        password.length < 6 &&
        passwordTouched &&
        "Password must be at least 6 characters",
      onFocus: () => setPasswordTouched(true),
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
            {errorMessage && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {errorMessage}
              </Alert>
            )}
            <Box display="flex" justifyContent="flex-end" marginTop={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/login")}
                style={{ width: "10rem", height: "4rem" }}
              >
                Cancel
              </Button>
              <Box marginLeft={1}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isLoading}
                  style={{ width: "10rem", height: "4rem" }}
                >
                  {isLoading ? (
                    <CircularProgress size={24} color={"inherit"} />
                  ) : (
                    "Register"
                  )}
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
