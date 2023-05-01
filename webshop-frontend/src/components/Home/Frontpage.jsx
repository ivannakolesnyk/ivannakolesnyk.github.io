import { MainSection } from "./Main/MainSection";
import { BannerSection } from "./Banner/BannerSection";
import { AboutUsSection } from "./AboutUs/AboutUsSection";
import Testimonials from "./Testimonials/TestimonialSection";
import { Box } from "@mui/material";

/**
 *
 * The Frontpage component is a React functional component used for displaying
 * the main sections of the home page. It combines the MainSection, BannerSection,
 * AboutUsSection, and TestimonialSection components to create a cohesive layout
 * for the home page. This component serves as the main entry point for users
 * when they visit the website.
 * @returns {JSX.Element} The JSX code for the Frontpage component.
 */
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
