import { Box, Grid, Typography, Button, Stack, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../assets/img/home.png";

const Frontpage = () => {
  const theme = useTheme();
  // use Theme hook is used to get the theme object, which is then used to set the textColor variable to the primary color defined in the theme. The textColor variable is then used to set the color of the Typography component using the sx prop.

  return (
    <Stack width={"100vw"} py={12} px={8} border={1}>
      <Paper sx={{ p: 8, width: 400 }}>
        <Stack spacing={8} alignItems={"flex-start"}>
          <Typography fontWeight={600} variant={"h4"}>
            ENJOY YOUR OWN COFEE AT HOME
          </Typography>
          <Typography>
            A variety of products to make your unique drink ... ... ... ...
          </Typography>
          <Button variant={"contained"}>order now</Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Frontpage;
