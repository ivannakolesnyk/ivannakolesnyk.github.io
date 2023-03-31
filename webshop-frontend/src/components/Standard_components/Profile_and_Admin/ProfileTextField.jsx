import {TextField} from "@mui/material";
import React from "react";

/**
 The ProfileTextField is a custom constant that wraps the TextField component from
 the Material-UI library. It is designed to streamline the rendering of text fields
 with common configurations and to reduce repetition
 */
export const ProfileTextField = ({label, value, setValue, ...props}) => (
    <TextField
        fullWidth
        label={label}
        margin="normal"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
    />
);