import React from 'react';
import './About.css';

const stats = [
  { num: '7', label: 'Barrel Brewhouse' },
  { num: '3', label: 'Fermentation Tanks' },
  { num: '8+', label: 'Rotating Taps' },
  { num: '1400m', label: 'Above Sea Level' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__text">
          <p className="section-label">Our Story</p>
          <h2 className="section-title">A beer garden born from the mountains</h2>
          <div className="divider-line" />
          <p className="about__para">
            Nuptse Brewing Co. was born from a love of great beer and the Himalayan landscape
            that surrounds us. Named after the towering peak that flanks Everest, we believe
            craft beer should be as honest and enduring as the mountains themselves.
          </p>
          <p className="about__para">
            Our 7-barrel brewhouse lets us brew in small, deliberate batches — enough to keep
            the garden flowing, small enough to care about every detail. We brew with local
            water, seasonal ingredients, and a deep respect for the craft.
          </p>
          <p className="about__para">Pull up a chair. Stay a while.</p>
        </div>

        <div className="about__stats">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <span className="stat-card__num">{s.num}</span>
              <span className="stat-card__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
