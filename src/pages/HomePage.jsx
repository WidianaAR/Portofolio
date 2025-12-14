import { useTranslation } from "react-i18next";
import Hero from "../sections/Hero.jsx";
import RightContent from "../sections/RightContent.jsx";

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="row custom-container m-0">
      <div className="col-md-5 col-12 left-page">
        <Hero />
      </div>
      <div id="right-content" className="col-md-7 col-12">
        <RightContent />
      </div>
    </div>
  );
}

export default HomePage;
