import React from "react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const ImageFileInput = ({ handleImageUpload, value = "" }) => {
  return (
    <Box>
      <input
        accept="image/*"
        id="product-image"
        type="file"
        hidden
        onChange={(evt) => {
          const file = evt.target.files[0];
          handleImageUpload(file);
        }}
        aria-label="Upload product image"
      />
      <TextField
        fullWidth
        label="Image URL"
        name="image"
        value={value}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                color="primary"
                aria-label="upload image"
                component="span"
                onClick={() => document.getElementById("product-image").click()}
                aria-controls="product-image"
              >
                <PhotoCamera />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default ImageFileInput;
