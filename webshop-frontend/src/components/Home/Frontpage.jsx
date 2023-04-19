import { MainSection } from "../Home/MainSection";
import { BannerSection } from "../Home/BannerSection";
import { AboutUsSection } from "../Home/AboutUsSection";
import Testimonials from "./TestimonialSection.tsx";
import { Box, Stack } from "@mui/material";

const Frontpage = () => {
  return (
    <Box mb={24}>
      <MainSection />

      <BannerSection />
      <AboutUsSection />

      <Testimonials />
    </Box>
  );
};

export default Frontpage;
