import React from "react";
import {Grid, Typography} from "@mui/material";
import PropTypes from "prop-types";

/**
 * TableHeader is a React functional component used for rendering a header cell
 * in a table-like structure. It accepts a title, width, and text alignment as properties.
 *
 * @component
 * @param {Object} props - The properties passed to the component
 * @param {string} props.title - The title of the header cell
 * @param {number} props.width - The width of the header cell, expressed as a number from 1 to 12 (for Grid layout)
 * @param {('inherit'|'left'|'center'|'right'|'justify')} [props.align='inherit'] - The text alignment of the header cell
 * @example
 * return (
 *   <TableHeader title="Product" width={4} align="left" />
 * );
 */
const TableHeader = ({ title, width, align }) => {
  return (
    <Grid item xs={width}>
      <Typography variant="subtitle1" align={align}>
        {title}
      </Typography>
    </Grid>
  );
};

TableHeader.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
};

TableHeader.defaultProps = {
  align: "inherit",
};

export default TableHeader;
