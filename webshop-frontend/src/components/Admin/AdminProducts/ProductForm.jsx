import React from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import useFirebaseStorage from "../../../hooks/useFirebaseStorage";
import ImageFileInput from "../../Standard_components/ImageFileInput";

/**
 * The ProductForm component is a React functional component used to display
 * the product form fields for adding or editing a product.
 *
 * @param {Object} product - An object containing product information.
 * @param {Function} setProduct - A callback function to set the product object.
 * @param {Function} onChange - A callback function to handle form field changes.
 * @param {boolean} showIngredients - A boolean value to display ingredients field.
 * @param {boolean} isEdit - A boolean value indicating if the form is for editing a product.
 * @returns {JSX.Element} The JSX code for the ProductForm component.
 */
const ProductForm = ({
  product,
  setProduct,
  onChange,
  showIngredients,
  isEdit,
}) => {
  const { uploadImageToCloudService } = useFirebaseStorage();

  const handleChange = (event, nestedProperty) => {
    const { name, value } = event.target;
    onChange(name, value, nestedProperty);
  };

  const handleImageUpload = async (file) => {
    const imgRef = `images/products/${
      isEdit ? product.category.name : product.category_name
    }/${file.name}`;

    if (!file) return;

    try {
      const imageUrl = await uploadImageToCloudService(file, imgRef);

      // Update the form data with the image URL.
      setProduct({ ...product, product_image: imageUrl });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="category_name">Category</InputLabel>
          <Select
            label="Category name"
            name={isEdit ? "name" : "category_name"}
            value={isEdit ? product.category.name : product.category_name}
            onChange={(evt) => {
              handleChange(evt, isEdit ? "category" : null);
            }}
            inputProps={{
              id: "category_name",
            }}
            aria-label="Category"
          >
            <MenuItem value="Coffee">Coffee</MenuItem>
            <MenuItem value="Tea">Tea</MenuItem>
            <MenuItem value="Equipment">Equipment</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={product.name}
          onChange={(evt) => handleChange(evt, null)}
          aria-label="Product name"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Price"
          name="price"
          value={product.price}
          onChange={(evt) => handleChange(evt, null)}
          aria-label="Product price"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={product.description}
          onChange={(evt) => handleChange(evt, null)}
          aria-label="Product description"
        />
      </Grid>
      {showIngredients && (
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Ingredients"
            name="ingredients"
            value={product.ingredients}
            onChange={(evt) => handleChange(evt, null)}
            rows={4}
            aria-label="Product ingredients"
          />
        </Grid>
      )}
      <Grid item xs={12}>
        <ImageFileInput
          handleImageUpload={handleImageUpload}
          value={product.product_image}
          aria-label="Product image"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Image alt"
          name="imageAlt"
          value={product.imageAlt}
          onChange={(evt) => handleChange(evt, null)}
          aria-label="Product image alt text"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Quantity in Stock"
          name="qty_in_stock"
          value={product.qty_in_stock}
          onChange={(evt) => handleChange(evt, null)}
          aria-label="Product quantity in stock"
        />
      </Grid>
    </Grid>
  );
};

export default ProductForm;
