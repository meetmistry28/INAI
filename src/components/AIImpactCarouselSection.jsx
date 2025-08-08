import React, { useState } from 'react';
import './AIImpactCarouselSection.css';

const milestones = [
  {
    year: '2019',
    icon: '🚀',
    title: 'Founded',
    desc: 'INAI Worlds is born with a vision for ethical AI.',
  },
  {
    year: '2021',
    icon: '🤖',
    title: 'First AI Product',
    desc: 'Launched our first AI-powered product for businesses.',
  },
  {
    year: '2023',
    icon: '🎓',
    title: '100+ Interns Trained',
    desc: 'Empowered the next generation of AI/ML talent.',
  },
  {
    year: '2024',
    icon: '🧠',
    title: 'Super AI Model',
    desc: 'Building India’s first super-intelligent AI model.',
  },
  {
    year: '2025',
    icon: '🌏',
    title: 'Global Impact',
    desc: 'Expanding AI solutions to improve lives worldwide.',
  },
];

const AIImpactCarouselSection = () => {
  const [centerIdx, setCenterIdx] = useState(2); // Start with the middle card

  const prevCard = () => {
    setCenterIdx((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const nextCard = () => {
    setCenterIdx((prev) => (prev < milestones.length - 1 ? prev + 1 : prev));
  };

  return (
    <section className="ai-carousel-section">
      <h2 className="ai-carousel-heading">Our AI Impact Timeline</h2>
      <div className="ai-carousel-wrapper">
        <button className="ai-carousel-arrow left" onClick={prevCard} disabled={centerIdx === 0}>&lt;</button>
        <div className="ai-carousel-track">
          {milestones.map((m, i) => {
            let className = 'ai-carousel-card';
            if (i === centerIdx) className += ' center';
            else if (i === centerIdx - 1 || i === centerIdx + 1) className += ' side';
            else className += ' hidden';
            return (
              <div className={className} key={i}>
                <div className="ai-carousel-icon">{m.icon}</div>
                <div className="ai-carousel-year">{m.year}</div>
                <div className="ai-carousel-title">{m.title}</div>
                <div className="ai-carousel-desc">{m.desc}</div>
              </div>
            );
          })}
        </div>
        <button className="ai-carousel-arrow right" onClick={nextCard} disabled={centerIdx === milestones.length - 1}>&gt;</button>
      </div>
    </section>
  );
};

export default AIImpactCarouselSection; 