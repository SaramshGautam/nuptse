import React, { useState } from 'react';
import './Menu.css';

const beers = [
  {
    name: 'Annapurna Amber',
    style: 'Amber Ale',
    cat: 'ale',
    desc: 'Caramel malt warmth with a gentle floral hop finish. Our house staple — smooth enough for the first round, interesting enough for the fifth.',
    abv: '5.2',
    ibu: '28',
  },
  {
    name: 'Yak Trail Lager',
    style: 'Czech Pilsner',
    cat: 'lager',
    desc: 'Crisp, clean, and refreshing. Brewed with Saaz hops and a long cold conditioning. The mountain thirst-quencher.',
    abv: '4.8',
    ibu: '22',
  },
  {
    name: 'Sherpa Stout',
    style: 'Dry Stout',
    cat: 'ale',
    desc: 'Dark as a starless Himalayan night. Roasted barley, dark chocolate, and a dry, clean finish.',
    abv: '5.6',
    ibu: '38',
  },
  {
    name: 'Boudha Wit',
    style: 'Belgian Witbier',
    cat: 'ale',
    desc: 'Brewed with coriander and dried mandarin peel. Hazy, golden, and gently spiced — the perfect garden beer.',
    abv: '4.5',
    ibu: '14',
  },
  {
    name: 'Monsoon Wheat',
    style: 'Hefeweizen',
    cat: 'seasonal',
    desc: 'Our summer seasonal. Banana and clove esters from Bavarian yeast, brewed to welcome the rain.',
    abv: '5.1',
    ibu: '16',
  },
  {
    name: 'High Camp IPA',
    style: 'West Coast IPA',
    cat: 'ale',
    desc: 'Resinous pine and citrus hops balanced by a firm biscuit malt backbone. Bold, not brutal.',
    abv: '6.4',
    ibu: '55',
  },
  {
    name: 'Timal Pale',
    style: 'Session Pale Ale',
    cat: 'ale',
    desc: 'Light-bodied, aromatic, easy-drinking. Named after the Himalayan raspberry — expect a subtle fruit brightness.',
    abv: '3.9',
    ibu: '25',
  },
  {
    name: 'Winter Solstice Porter',
    style: 'Baltic Porter',
    cat: 'seasonal',
    desc: 'Our cold-weather release. Rich, dark, and warming — vanilla, dark fruit, and a silky finish.',
    abv: '7.2',
    ibu: '32',
  },
];

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'lager', label: 'Lagers' },
  { key: 'ale', label: 'Ales' },
  { key: 'seasonal', label: 'Seasonal' },
];

export default function Menu() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? beers : beers.filter((b) => b.cat === active);

  return (
    <section className="menu" id="menu">
      <div className="menu__inner">
        <p className="section-label">On Tap</p>
        <h2 className="section-title section-title--light">Our beers</h2>
        <div className="divider-line" />

        <div className="menu__tabs">
          {tabs.map((t) => (
            <button
              key={t.key}
              className={`menu__tab ${active === t.key ? 'menu__tab--active' : ''}`}
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="menu__grid">
          {filtered.map((b) => (
            <div className="beer-card" key={b.name}>
              <p className="beer-card__style">{b.style}</p>
              <h3 className="beer-card__name">{b.name}</h3>
              <p className="beer-card__desc">{b.desc}</p>
              <div className="beer-card__meta">
                <span className="beer-card__tag">
                  ABV <strong>{b.abv}%</strong>
                </span>
                <span className="beer-card__tag">
                  IBU <strong>{b.ibu}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
