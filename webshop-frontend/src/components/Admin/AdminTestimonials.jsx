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
 * The AdminTestimonials component is a React functional component used for displaying
 * the orders a user has made.
 * @returns {JSX.Element} The JSX code for the AdminTestimonials component.
 */
const AdminTestimonials = () => {
  const navigate = useNavigate();
  return (
    <StandardCenteredBox>
      <StandardCenteredCard>
        <CardHeader title="Testimonials" sx={{ color: "secondary.main" }} />
        <Divider />
        <CardContent>
          <Typography variant="body1">
            Testimonials and option to change them will show here?
          </Typography>
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

export default AdminTestimonials;
