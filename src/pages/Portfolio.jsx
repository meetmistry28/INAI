import Hero from '../components/Hero';
import PortfolioIntro from '../components/PortfolioIntro';
import './Portfolio.css';
import CTA_Portfolio from '../components/CTA_Portfolio';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  const portfolioHeroData = {
    tagline: "Our AI Innovation Portfolio",
    title: "Inside INAI Worlds: Real AI Innovations",
    subtitle: "At INAI Worlds, we don’t just talk about innovation, we build it. Every AI module we craft is the result of our hands-on development, real-world testing, and a relentless drive to solve industry-specific challenges. Our portfolio reflects the future of AI, created today by a team of experts and emerging talents.",
    buttons: [
      { text: "Start Your AI Journey", link: "/contact", className: "btn-primary-hero" },
    ]
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | Upcoming AI Projects | INAI Worlds</title>
        <meta
          name="description"
          content="Explore our AI portfolio showcasing real-world projects and innovations. Discover how INAI Worlds transforms ideas into AI solutions."
        />
      </Helmet>
      <div className="portfolio-page">
        <Hero
          tagline={portfolioHeroData.tagline}
          title={portfolioHeroData.title}
          subtitle={portfolioHeroData.subtitle}
          buttons={portfolioHeroData.buttons}
          isShort={true}
        />
        <PortfolioIntro />
        {/* You can add portfolio items here */}
        {/* <ArchitectsSection/> */}
        {/* <FAQ/> */}
        <CTA_Portfolio />
      </div>
    </>
  );
};

export default Portfolio; 