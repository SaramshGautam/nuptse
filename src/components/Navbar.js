import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../NuptseBrewingCo-logo.svg";

const links = ["About", "Menu", "Events", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo">
        <img src={Logo} alt="Nuptse Brewing Co." className="navbar__logo-img" />
        <span>
          Nuptse <em>Brewing Co.</em>
        </span>
      </div>

      <ul className="navbar__links">
        {links.map((l) => (
          <li key={l}>
            <button onClick={() => scrollTo(l)} className="navbar__link">
              {l}
            </button>
          </li>
        ))}
      </ul>

      <button className="navbar__cta" onClick={() => scrollTo("Contact")}>
        Visit Us
      </button>

      <button
        className="navbar__burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {menuOpen && (
        <div className="navbar__mobile">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="navbar__mobile-link"
            >
              {l}
            </button>
          ))}
          <button
            className="navbar__cta navbar__cta--mobile"
            onClick={() => scrollTo("Contact")}
          >
            Visit Us
          </button>
        </div>
      )}
    </nav>
  );
}
