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
import StandardCenteredBox from "../Standard_components/StandardCenteredBox";
import StandardCenteredCard from "../Standard_components/StandardCenteredCard";

/**
 *
 * The ProfileViewOrders component is a React functional component used for displaying
 * the orders a user has made.
 * @returns {JSX.Element} The JSX code for the ProfileViewOrders component.
 */
const ProfileViewOrders = () => {
  const navigate = useNavigate();
  return (
    <StandardCenteredBox>
      <StandardCenteredCard>
        <CardHeader title="Orders" sx={{ color: "secondary.main" }} />
        <Divider />
        <CardContent>
          <Typography variant="body1">Orders will show here</Typography>

          <Box display="flex" justifyContent="flex-end" marginTop={2}>
            <Button variant="contained" onClick={() => navigate("/profile")}>
              Go Back
            </Button>
          </Box>
        </CardContent>
      </StandardCenteredCard>
    </StandardCenteredBox>
  );
};

export default ProfileViewOrders;
