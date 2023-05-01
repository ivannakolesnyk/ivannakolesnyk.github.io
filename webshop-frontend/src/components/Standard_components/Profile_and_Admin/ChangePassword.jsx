import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CardContent,
  CircularProgress,
  Divider,
} from "@mui/material";
import StandardCenteredBox from "../StandardCenteredBox";
import StandardCenteredCard from "../StandardCenteredCard";
import { PasswordTextField } from "./PasswordTextField";
import useFetch from "../../../hooks/useFetch";
import InternalError from "../InternalError";
import { useAuthHeaders } from "../../../hooks/useAuthHeaders";

/**
 *
 * This React component allows users to change their password by providing input fields
 * for their current password, new password, and confirmation of the new password.
 * The component uses Material-UI components for styling and layout.
 * @returns {JSX.Element} The JSX code for the ChangePassword component.
 */
const ChangePassword = ({ navigateTo }) => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // Used to check if the passwords are similar
  const newPasswordsMatch = () => newPassword === confirmNewPassword;
  // Used to make sure message for dissimilar passwords on show after confirm new PW field is touched
  const [confirmNewPasswordTouched, setConfirmNewPasswordTouched] =
    useState(false);

  const { headers, userEmail } = useAuthHeaders();

  const { isLoading, error, refetch } = useFetch(
    "PUT",
    `users/${userEmail}/password`,
    headers,
    null,
    null,
    false
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPasswordsMatch()) {
      // Handle the case when the new password and confirm new password don't match
      return;
    }

    const passwordData = {
      currentPassword,
      newPassword,
    };

    await refetch(passwordData);

    if (!error) {
      navigate(navigateTo);
    }

    if (error) {
      return <InternalError />;
    }
  };

  return (
    <StandardCenteredBox>
      <StandardCenteredCard title="Change password">
        <Divider />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <PasswordTextField
              required
              id="current-password"
              label="Current Password"
              value={currentPassword}
              setValue={setCurrentPassword}
            />
            <PasswordTextField
              required
              id="new-password"
              label="New Password"
              value={newPassword}
              setValue={setNewPassword}
            />
            <PasswordTextField
              required
              id="confirm-new-password"
              label="Confirm New Password"
              value={confirmNewPassword}
              setValue={setConfirmNewPassword}
              error={!newPasswordsMatch() && confirmNewPasswordTouched}
              helperText={
                !newPasswordsMatch() &&
                confirmNewPasswordTouched &&
                "Passwords do not match"
              }
              onFocus={() => setConfirmNewPasswordTouched(true)}
            />

            <Box display="flex" justifyContent="flex-end" marginTop={2}>
              <Button
                variant="contained"
                sx={{ width: "10rem" }}
                onClick={() => navigate(navigateTo)}
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
                >
                  {isLoading ? (
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

export default ChangePassword;
