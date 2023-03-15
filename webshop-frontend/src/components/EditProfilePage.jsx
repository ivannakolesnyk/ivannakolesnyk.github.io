import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
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
    <Card>
      <CardHeader title="Edit Profile Information" />
      <Divider />
      <form onSubmit={handleSubmit}>
        <CardContent>
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
        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Button
              onClick={() => navigate("/profile")}
              sx={{ color: theme.palette.primary.contrastText }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save Changes
            </Button>
          </Box>
        </CardActions>
      </form>
    </Card>
  );
};

export default EditProfile;
