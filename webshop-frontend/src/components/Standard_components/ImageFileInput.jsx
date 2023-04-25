import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
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
