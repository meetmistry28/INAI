import Hero from '../Hero.jsx';
// import Marquee from '../components/HomePage/Marquee.jsx';
import CoreFeatures from '../CoreFeatures.jsx';
// import Partners from '../components/Partners';
import InfoSection from '../InfoSection.jsx';
import './Home.css';
import ArchitectsSection from '../ArchitectsSection.jsx';
import FAQ from '../FAQ.jsx';
import CTA from '../CTA.jsx';
import UpcomingProjectsSection from '../UpcomingProjectsSection.jsx';
import RealWorldTraining from '../../pages/RealWorldTraining.jsx';
import CoreElements from '../../pages/CoreElements.jsx';
import ResultsStatsSection from '../ResultsStatsSection.jsx';
import BlogSection from '../BlogSection.jsx';
import Reviews from '../../pages/Reviews.jsx';
import WhatIsInaiSection from '../../pages/WhatIsInaiSection.jsx';
import Marquee from './Marquee.jsx';
import OurSeamless from './OurSeamless.jsx';
import BlogSectionHome from '../BlogSectionHome.jsx';

const Home = () => {
  const homeHeroData = {
    title: "Best AI Company Delivering Future-Ready Solutions & Career-Defining AI/ML Internship",
    subtitle: "INAI Worlds is proudly recognized among the best AI company building India’s next generation of AI infrastructure. We specialize in developing powerful in-house AI products, while also preparing future tech leaders through our hands-on AI/ML internship programs.",
    tagline: " Innovative AI Tool to Streamline",
    buttons: [
      { text: "Contact Us", link: "/contact", className: "btn-primary-hero" },
    ]
  };

  return (
    <div className="home">
      <Hero
        tagline={homeHeroData.tagline}
        title={<>Best AI Company Delivering<span className="highlight-text-home">Future-Ready AI Solutions & Career</span></>}
        subtitle={homeHeroData.subtitle}
        buttons={homeHeroData.buttons}
      />
      <UpcomingProjectsSection />
      <CoreFeatures />
      <RealWorldTraining />
      <CoreElements />
      <Marquee />
      {/* <WhatIsInaiSection /> */}
      <ResultsStatsSection />
      <OurSeamless />
      {/* <Reviews /> */}
      {/* <ArchitectsSection /> */}
      <FAQ />
      <BlogSectionHome />
    </div>
  );
};

export default Home; 