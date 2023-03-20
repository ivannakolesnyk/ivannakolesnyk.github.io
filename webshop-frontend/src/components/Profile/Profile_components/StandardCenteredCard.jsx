import React from "react";
import { Card } from "@mui/material";

const StandardCenteredCard = ({ children }) => (
  <Card sx={{ width: "50%", maxWidth: "700px" }}>{children}</Card>
);

export default StandardCenteredCard;
