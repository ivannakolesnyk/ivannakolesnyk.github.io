import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StandardCenteredBox from "../Standard_components/StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";

/**
The ViewOrders component is a React functional component used for displaying
the orders a user has made.
@returns {JSX.Element} The JSX code for the AdminViewOrders component.
*/
const AdminViewOrders = () => {
  // Import the custom theme from theme.js
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <StandardCenteredBox>
      <StandardCenteredCard>
        <CardHeader
          title="Orders"
          sx={{ color: theme.palette.primary.contrastText }}
        />
        <Divider />
        <CardContent>
          <Typography variant="body1">All orders will show here</Typography>

          <Box display="flex" justifyContent="flex-end" marginTop={2}>
            <Button variant="contained" onClick={() => navigate("/admin")}>
              Go Back
            </Button>
          </Box>
        </CardContent>
      </StandardCenteredCard>
    </StandardCenteredBox>
  );
};

export default AdminViewOrders;
