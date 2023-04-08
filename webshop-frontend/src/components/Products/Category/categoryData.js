import {
  EmojiFoodBeverage,
  HomeRepairService,
  LocalCafe,
  TrendingDown,
} from "@mui/icons-material";

const iconStyle = {
  color: "secondary.main",
  fontSize: "3rem",
};

export const categories = [
  {
    name: "Coffee",
    icon: () => <LocalCafe sx={iconStyle} />,
  },
  {
    name: "Tea",
    icon: () => <EmojiFoodBeverage sx={iconStyle} />,
  },
  {
    name: "Equipment",
    icon: () => <HomeRepairService sx={iconStyle} />,
  },
  {
    name: "Sale",
    icon: () => <TrendingDown sx={iconStyle} />,
  },
];
