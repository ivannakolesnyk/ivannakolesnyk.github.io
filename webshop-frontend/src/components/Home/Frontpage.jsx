import { MainSection } from "../Home/MainSection";
import { BannerSection } from "../Home/BannerSection";
import { AboutUsSection } from "../Home/AboutUsSection";
import Testimonials from "./TestimonialSection.tsx";
import { Box } from "@mui/material";

const Frontpage = () => {
  return (
    <Box>
      <MainSection />

      <BannerSection />
      <AboutUsSection />

      <Testimonials />
    </Box>
  );
};

export default Frontpage;
