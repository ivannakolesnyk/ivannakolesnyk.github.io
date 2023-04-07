import React from "react";
import { Typography, Card, CardContent, CardHeader } from "@mui/material";

const Testimonial = ({ name, comment }) => {
  console.log("Testimonial props:", { name, comment });

  return (
    <Card>
      <CardHeader title={name} />
      <CardContent>
        <Typography color={"secondary"} component="p">
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
