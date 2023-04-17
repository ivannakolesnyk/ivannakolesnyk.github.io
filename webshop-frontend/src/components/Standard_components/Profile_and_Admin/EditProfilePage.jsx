import {Box, Button, CardContent, CardHeader, CircularProgress, Divider} from "@mui/material";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import StandardCenteredBox from "../StandardCenteredBox";
import StandardCenteredCard from "../StandardCenteredCard";
import { ProfileTextField } from "./ProfileTextField";
import useFetch from "../../../hooks/useFetch";
import cookie from "cookie";
import jwt_decode from "jwt-decode";
import InternalError from "../InternalError";

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
  const [phone_number, setPhone_number] = useState("");
  const [postal_code, setPostal_code] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const jwt = cookie.parse(document.cookie).jwt;
  const payload = jwt_decode(jwt);
  const userEmail = payload ? payload.sub : ""; // Replace 'sub' with the claim name containing the user's email

  const headers = useMemo(
    () => ({
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    }),
    [jwt]
  );

  const { isLoading, error, refetch } = useFetch(
    "PUT",
    `users/${userEmail}`,
    headers,
    null,
    null,
    false
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    if (error) {
      return <InternalError />;
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
            <Box display="flex" justifyContent="flex-end" marginTop={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate(navigateTo)}
              >
                Cancel
              </Button>
              <Box marginLeft={1}>

                <Button type="submit" variant="contained" color="primary" sx={{height: "4rem", width: "18rem"}} disabled={isLoading}>
                  {isLoading ? (
                      <CircularProgress size={24} color="inherit" />
                  ) : (
                      "Save Changes"
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
