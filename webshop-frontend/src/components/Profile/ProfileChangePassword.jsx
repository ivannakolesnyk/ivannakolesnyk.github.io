import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, CardContent, CardHeader, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StandardCenteredBox from "../Standard_components/StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";
import { PasswordTextField } from "../Standard_components/Profile_and_Admin/PasswordTextField";

/**
This React component allows users to change their password by providing input fields 
for their current password, new password, and confirmation of the new password. 
The component uses Material-UI components for styling and layout.
@returns {JSX.Element} The JSX code for the ProfileChangePassword component.
*/
const ProfileChangePassword = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // Used to check if the passwords are similiar
  const newPasswordsMatch = () => newPassword === confirmNewPassword;
  // Used to make sure message for disimilar passwords on show after confirm new PW field is touched
  const [confirmNewPasswordTouched, setConfirmNewPasswordTouched] =
    useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newPasswordsMatch()) {
      // Handle the case when the new password and confirm new password don't match
      return;
    }
    // Handle form submission logic here
  };

  return (
    <StandardCenteredBox>
      <StandardCenteredCard>
        <CardHeader
          title="Change Password"
          sx={{ color: theme.palette.primary.contrastText }}
        />
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
              <Button variant="contained" onClick={() => navigate("/profile")}>
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

export default ProfileChangePassword;
