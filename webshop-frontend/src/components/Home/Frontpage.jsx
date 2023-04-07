import { MainSection } from "../Home/MainSection";
import { BannerSection } from "../Home/BannerSection";
import { AboutUsSection } from "../Home/AboutUsSection";
import Testimonials from "./TestimonialSection";

const Frontpage = () => {
  return (
    <div>
      <MainSection />

      <BannerSection />
      <AboutUsSection />

      <Testimonials />
    </div>
  );
};

export default Frontpage;
