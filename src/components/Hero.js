import React from "react";
import "./Hero.css";
import Logo from "../NuptseBrewingCo-logo.svg";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <img src={Logo} alt="Nuptse Brewing Co." className="hero__logo" />

        <p className="hero__eyebrow">
          Kathmandu, Nepal &nbsp;·&nbsp; Est. 2026
        </p>
        <h1 className="hero__title">
          Brewed in the shadow of <em>the giants</em>
        </h1>
        <p className="hero__sub">
          Craft beer rooted in Himalayan spirit. Small batch. Honest
          ingredients. Shared around long tables under open skies.
        </p>
        <div className="hero__btns">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => scrollTo("menu")}
          >
            Explore Our Beers
          </button>
          <button
            className="hero__btn hero__btn--outline"
            onClick={() => scrollTo("events")}
          >
            Upcoming Events
          </button>
        </div>
      </div>

      <svg
        className="hero__mountains"
        viewBox="0 0 1200 160"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon
          points="0,160 0,110 120,60 200,95 320,20 420,75 540,5 640,70 750,30 860,85 960,45 1060,80 1200,25 1200,160"
          fill="#EDE5D0"
          opacity="0.07"
        />
        <polygon
          points="0,160 0,130 100,90 220,120 350,55 480,100 600,40 720,90 840,60 960,95 1080,65 1200,85 1200,160"
          fill="#EDE5D0"
          opacity="0.04"
        />
        <polygon
          points="0,160 200,120 400,145 600,110 800,140 1000,115 1200,135 1200,160"
          fill="#F7F2E8"
        />
      </svg>
    </section>
  );
}
