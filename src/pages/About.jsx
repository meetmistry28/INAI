import Hero from '../components/Hero';
import CTA2 from '../components/CTA2';
import CompanyVMVCarousel from '../components/CompanyVMVCarousel';

const About = () => {
  const aboutHeroData = {
    tagline: "Innovative AI Tool to Streamline",
    title: "Welcome to INAI Worlds",
    subtitle:
      "As a Best AI company in India, we are dedicated to revolutionizing industries through innovative AI solutions, focusing on making Generative AI products, predictive analytics, natural language processing and empowering businesses to achieve great goals for the future.",
    buttons: [
      { text: "Get In Touch", link: "/contact", className: "btn-primary-hero" },
    ],
  };

  return (
    <>
      <div className="w-full overflow-x-hidden bg-[#0A0C18] text-white">
        <Hero
          tagline={aboutHeroData.tagline}
          title={
            <>
              <span className="text-primary font-bold">Welcome to INAI Worlds</span>
            </>
          }
          subtitle={aboutHeroData.subtitle}
          buttons={aboutHeroData.buttons}
        />
      </div>
      <div className="w-full">
        <CompanyVMVCarousel />
      </div>
      <div className="w-full">
        <CTA2 />
      </div>
    </>
  );
};

export default About;
