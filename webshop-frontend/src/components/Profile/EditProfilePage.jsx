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

const EditProfile = () => {
  // Import the custom theme from theme.js
  const theme = useTheme();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save updated profile information to database or backend service
    navigate("/profile");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}>
      <Card sx={{ width: "50%", maxWidth: "700px" }}>
        <CardHeader
          title="Edit Profile Information"
          sx={{ color: theme.palette.primary.contrastText }}
        />
        <Divider />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              required
            />
            <TextField
              fullWidth
              label="Phone"
              margin="normal"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />
            <TextField
              fullWidth
              label="Address"
              margin="normal"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required
            />

            <Box display="flex" justifyContent="flex-end" marginTop={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => navigate("/profile")}
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
      </Card>
    </Box>
  );
};

export default EditProfile;
