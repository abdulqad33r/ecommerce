import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../client";

const HeroBanner = ({ banner }) => {
  return (
    <div className="hero-banner">
      <div>
        <p className="small-text">{banner.smallText}</p>
        <p className="mid-text">{banner.midText}</p>
        <p className="large-text">{banner.largeText1}</p>
        <div>
          <Link to={`/ecommerce/product/wireless-headphones2`}>
            <button className="banner-btn">{banner.buttonText}</button>
          </Link>
        </div>
        {banner.image && (
          <img
            src={urlFor(banner.image)}
            alt="headphones"
            className="hero-banner-image"
          />
        )}
        <div className="banner-description">
          <p>Description</p>
          <p>{banner.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
