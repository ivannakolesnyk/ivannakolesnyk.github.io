import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

function ChangePassword() {
  // Import the custom theme from theme.js
  const theme = useTheme();
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}>
      <Card sx={{ width: "50%", maxWidth: "700px" }}>
        <CardHeader
          title="Change Password"
          sx={{ color: theme.palette.primary.contrastText }}
        />
        <Divider />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              margin="normal"
              id="current-password"
              label="Current Password"
              type="password"
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
            />
            <TextField
              required
              fullWidth
              margin="normal"
              id="new-password"
              label="New Password"
              type="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
            <TextField
              required
              fullWidth
              margin="normal"
              id="confirm-new-password"
              label="Confirm New Password"
              type="password"
              value={confirmNewPassword}
              onChange={handleConfirmNewPasswordChange}
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
      </Card>
    </Box>
  );
}

export default ChangePassword;
