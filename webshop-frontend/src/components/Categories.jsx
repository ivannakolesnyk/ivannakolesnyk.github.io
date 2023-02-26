import React from "react";
import { Typography } from "@mui/material";
import {
  EmojiFoodBeverage,
  ExpandLess,
  ExpandMore,
  HomeRepairService,
  LocalCafe,
  TrendingDown,
} from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@emotion/react";

const Categories = () => {
  const theme = useTheme();

  const [openCoffee, setOpenCoffe] = React.useState(false);
  const handleClickCoffee = () => {
    setOpenCoffe(!openCoffee);
  };

  const [openTea, setOpenTea] = React.useState(false);
  const handleClickTea = () => {
    setOpenTea(!openTea);
  };
  return (
    <>
      <Typography color={theme.palette.primary.main} variant="h4">
        Categories
      </Typography>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          color: theme.palette.primary.main,
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
      >
        <ListItemButton onClick={handleClickCoffee}>
          <ListItemIcon>
            <LocalCafe sx={{ color: theme.palette.primary.main }} />
          </ListItemIcon>
          <ListItemText primary="Coffee" />
          {openCoffee ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openCoffee} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Ice-Coffee" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Warm-Coffee" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Whatever-Coffee" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClickTea}>
          <ListItemIcon>
            <EmojiFoodBeverage sx={{ color: theme.palette.primary.main }} />
          </ListItemIcon>
          <ListItemText primary="Tea" />
          {openTea ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openTea} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Ice-Tea" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Warm-Tea" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Whatever-Tea" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <HomeRepairService sx={{ color: theme.palette.primary.main }} />
          </ListItemIcon>
          <ListItemText primary="Equipment" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <TrendingDown sx={{ color: theme.palette.primary.main }} />
          </ListItemIcon>
          <ListItemText primary="Sale" />
        </ListItemButton>
      </List>
    </>
  );
};

export default Categories;
