import ethicalAI from '../assets/shild.png';
import modelDev from '../assets/Setting.png';
import integration from '../assets/layer.png';
import humanAI from '../assets/person.png';

const whyFeatures = [
  {
    icon: ethicalAI,
    title: 'Ethical & Scalable AI',
    desc: 'Strong focus on ethical and scalable AI systems',
  },
  {
    icon: modelDev,
    title: 'Model Development',
    desc: 'Advanced model development using structured & scraped data',
  },
  {
    icon: integration,
    title: 'Seamless Integration',
    desc: 'Seamless product integration for business and social use',
  },
  {
    icon: humanAI,
    title: 'Human-Centric AI',
    desc: 'Making AI accessible, useful, and human-centric',
  },
];

const CoreFeatures = () => {
  return (
    <section className="core-features-section">
      <div className="container">
        <div className="features-content">
          <div className="hero-tag" style={{ marginBottom: '1.5rem' }}>
            ✨  WHY INAI WORLDS
          </div>
          <h2 className="main-heading">
            Why INAI Worlds - <span className="highlight-text">Best AI Company</span>
          </h2>
          <p className="features-description">
            INAI Worlds is proudly recognized among the best AI company building India’s next generation <br /> of AI infrastructure. We specialize in developing powerful in-house AI products, while also preparing <br /> future tech leaders through our hands-on AI/ML internship programs.

          </p>
        </div>
        <div className="features-cards why-features-grid">
          {whyFeatures.map((feature, index) => (
            <div
              className="why-feature-card grid-hover-effect rounded-xl shadow-md p-4 bg-white"
              key={index}
            >
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              </div>
              <h3 className="why-feature-title text-lg font-semibold mb-1">
                {feature.title}
              </h3>
              <p className="why-feature-desc text-gray-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures; 