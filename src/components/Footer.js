import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        Nuptse <span>Brewing Co.</span>
      </div>
      <p className="footer__tagline">Brewed with mountain water & good intentions.</p>
      <p className="footer__copy">
        © {new Date().getFullYear()} Nuptse Brewing Co. · Kathmandu, Nepal · All rights reserved
      </p>
    </footer>
  );
}
