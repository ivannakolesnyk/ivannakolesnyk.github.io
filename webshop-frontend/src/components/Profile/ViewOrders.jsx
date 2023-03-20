import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

/**
The ViewOrders component is a React functional component used for displaying
the orders a user has made.
@returns {JSX.Element} The JSX code for the ViewOrders component.
*/
const ViewOrders = () => {
  // Import the custom theme from theme.js
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <Card sx={{ width: "50%", maxWidth: "700px" }}>
        <CardHeader
          title="Orders"
          sx={{ color: theme.palette.primary.contrastText }}
        />
        <Divider />
        <CardContent>
          <Typography variant="body1">Orders will show here</Typography>

          <Box display="flex" justifyContent="flex-end" marginTop={2}>
            <Button variant="contained" onClick={() => navigate("/profile")}>
              Go Back
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ViewOrders;
