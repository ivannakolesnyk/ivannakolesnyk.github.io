import React from "react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

/**
 * Renders a TextField for displaying image URL and an IconButton to upload an image.
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.handleImageUpload - The callback function to handle the image upload.
 * @param {string} [props.value=""] - The value of the TextField (image URL).
 * @returns {React.Element} - The ImageFileInput component.
 */
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
