import React from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const ProductForm = ({ product, onChange, showIngredients, isEdit }) => {
  const handleChange = (event, nestedProperty) => {
    const { name, value } = event.target;
    onChange(name, value, nestedProperty);
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
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Price"
          name="price"
          value={product.price}
          onChange={(evt) => handleChange(evt, null)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={product.description}
          onChange={(evt) => handleChange(evt, null)}
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
          />
        </Grid>
      )}
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Image URL"
          name="product_image"
          value={product.product_image}
          onChange={(evt) => handleChange(evt, null)}
          margin="normal"
          helperText="Example: /assets/img/products/coffee/dark-roast.png"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Image alt"
          name="imageAlt"
          value={product.imageAlt}
          onChange={(evt) => handleChange(evt, null)}
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Quantity in Stock"
          name="qty_in_stock"
          value={product.qty_in_stock}
          onChange={(evt) => handleChange(evt, null)}
        />
      </Grid>
    </Grid>
  );
};

export default ProductForm;
