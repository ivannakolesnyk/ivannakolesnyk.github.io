import React from "react";

import { Box, Stack } from "@mui/system";
import Categories from "./Categories";

const Products = () => {
  return (
    <Box>
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Box flex={1} p={4}>
          <Categories />
        </Box>
        <Box bgcolor={"blue"} flex={5} p={4}>
          Products
        </Box>
      </Stack>
    </Box>
  );
};

export default Products;
