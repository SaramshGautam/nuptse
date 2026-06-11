import React, { useState } from 'react';
import './Menu.css';

import PremierLager from '../beer-svgs/PremierLager.svg';
import AmericanPaleAle from '../beer-svgs/AmericanPaleAle.svg';
import OatmealStout from '../beer-svgs/OatmealStout.svg';
import NewEnglandIPA from '../beer-svgs/NewEnglandIPA.svg';
import AmberAle from '../beer-svgs/AmberAle.svg';
import DoubleIPA from '../beer-svgs/DoubleIPA.svg';

const beers = [
  {
    name: 'Premier Lager',
    style: 'Czech-Style Lager',
    cat: 'core',
    desc: 'Crisp, clean and endlessly drinkable. Cold-conditioned with Saaz hops for a refreshing finish that pairs perfectly with the Kathmandu sun.',
    abv: '4.8',
    ibu: '18',
    img: PremierLager,
  },
  {
    name: 'American Pale Ale',
    style: 'American Pale Ale',
    cat: 'core',
    desc: 'Bright citrus and pine hop aroma balanced by a biscuit malt backbone. Our everyday crowd-pleaser.',
    abv: '5.2',
    ibu: '35',
    img: AmericanPaleAle,
  },
  {
    name: 'Oatmeal Stout',
    style: 'Oatmeal Stout',
    cat: 'core',
    desc: 'Silky smooth with notes of dark chocolate, roasted coffee and a creamy oat finish. Rich but surprisingly easy drinking.',
    abv: '5.6',
    ibu: '32',
    img: OatmealStout,
  },
  {
    name: 'New England IPA',
    style: 'Hazy IPA',
    cat: 'seasonal',
    desc: 'Thick, hazy and bursting with tropical fruit. Soft bitterness, big aroma. Limited batches — grab it while it\'s on.',
    abv: '6.2',
    ibu: '45',
    img: NewEnglandIPA,
  },
  {
    name: 'Amber Ale',
    style: 'American Amber Ale',
    cat: 'seasonal',
    desc: 'Caramel malt warmth with a gentle floral hop finish. The perfect pour around the fire pit.',
    abv: '5.4',
    ibu: '28',
    img: AmberAle,
  },
  {
    name: 'Double IPA',
    style: 'Imperial IPA',
    cat: 'seasonal',
    desc: 'Big, bold and unapologetically hoppy. Resinous pine and citrus over a firm malt base. Not for the faint-hearted.',
    abv: '8.1',
    ibu: '75',
    img: DoubleIPA,
  },
];

const tabs = [
  { key: 'all',      label: 'All Beers' },
  { key: 'core',     label: 'Always on Tap' },
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
              <div className="beer-card__illustration">
                <img src={b.img} alt={b.name} className="beer-card__img" />
                <span className={`beer-card__badge ${b.cat === 'core' ? 'beer-card__badge--core' : 'beer-card__badge--seasonal'}`}>
                  {b.cat === 'core' ? 'Always on Tap' : 'Seasonal'}
                </span>
              </div>
              <div className="beer-card__body">
                <p className="beer-card__style">{b.style}</p>
                <h3 className="beer-card__name">{b.name}</h3>
                <p className="beer-card__desc">{b.desc}</p>
                <div className="beer-card__meta">
                  <span className="beer-card__tag">ABV <strong>{b.abv}%</strong></span>
                  <span className="beer-card__tag">IBU <strong>{b.ibu}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
