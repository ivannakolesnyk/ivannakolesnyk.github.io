import {
  Alert,
  Box,
  Button,
  CardContent,
  CircularProgress,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StandardCenteredBox from "../StandardCenteredBox";
import StandardCenteredCard from "../StandardCenteredCard";
import { ProfileTextField } from "./ProfileTextField";
import useFetch from "../../../hooks/useFetch";
import InternalError from "../InternalError";
import { useAuthHeaders } from "../../../hooks/useAuthHeaders";
import Loading from "../Loading";

/**
 *
 * The EditProfilePage component is a React functional component used for displaying
 * a form allowing users to edit their profile information. This component is
 * part of a user profile management system.
 * @returns {JSX.Element} The JSX code for the EditProfilePage component.
 */
const EditProfilePage = ({ navigateTo }) => {
  const navigate = useNavigate();
  const { headers, userEmail } = useAuthHeaders();
  const [name, setName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [postal_code, setPostal_code] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const { data, isLoading, error } = useFetch(
    "GET",
    `users/${userEmail}`,
    headers
  );

  const {
    isLoading: isLoadingButton,
    error: errorButton,
    refetch,
  } = useFetch("PUT", `users/${userEmail}`, headers, null, null, false);

  useEffect(() => {
    if (data) {
      setName(data.name || "");
      setPhone_number(data.phone_number || "");
      setPostal_code(data.postal_code || "");
      setAddress(data.address || "");
      setCity(data.city || "");
    }
  }, [data]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const digitPattern = /^\d+$/;

    if (!digitPattern.test(phone_number)) {
      setErrorMessage("Phone number must contain only digits.");
      return;
    }

    if (!digitPattern.test(postal_code)) {
      setErrorMessage("Postal code must contain only digits.");
      return;
    }

    const profileData = {
      name,
      email: userEmail,
      phone_number,
      postal_code,
      address,
      city,
    };

    await refetch(profileData);

    if (!error) {
      navigate(navigateTo);
    }
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

  if (isLoading) return <Loading />;
  if (error) return <InternalError />;

  return (
    <StandardCenteredBox component="main" aria-labelledby="edit-profile-title">
      <StandardCenteredCard title="Edit profile">
        <Divider />
        <CardContent>
          <form onSubmit={handleSubmit} aria-label="Edit profile form">
            {createProfileTextField("Name", "name", name, setName)}
            {createProfileTextField(
              "Phone",
              "phone",
              phone_number,
              setPhone_number
            )}
            {createProfileTextField("Address", "address", address, setAddress)}
            {createProfileTextField(
              "Postal Code",
              "postalCode",
              postal_code,
              setPostal_code
            )}
            {createProfileTextField("City", "city", city, setCity)}
            {errorMessage && (
              <Alert severity="error" sx={{ mt: 2 }} role="alert">
                {errorMessage}
              </Alert>
            )}
            <Box display="flex" justifyContent="flex-end" marginTop={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate(navigateTo)}
                sx={{ width: "10rem" }}
                aria-label="Cancel"
              >
                Cancel
              </Button>
              <Box marginLeft={1}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: "10rem" }}
                  disabled={isLoading}
                  aria-label="Save changes"
                >
                  {isLoadingButton ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Save"
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

export default EditProfilePage;
