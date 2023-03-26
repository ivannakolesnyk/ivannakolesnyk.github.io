import { MainSection } from "../components/MainSection.jsx";
import { BannerSection } from "../components/BannerSection.jsx";
import { AboutUsSection } from "../components/AboutUsSection.jsx";

const Frontpage = () => {
  return (
    <div>
      <MainSection />

      <BannerSection />
      <AboutUsSection />
    </div>
  );
};

export default Frontpage;
