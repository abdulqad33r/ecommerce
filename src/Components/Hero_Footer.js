import React from "react";
import FooterBanner from "./FooterBanner";
import HeroBanner from "./HeroBanner";
import Product from "./Product";

const Hero_Footer = ({ banner, products }) => {
  return (
    <div>
      <HeroBanner banner={banner} />

      <div className="products-container">
        {products?.map((item) => (
          <Product key={item._id} product={item} />
        ))}
      </div>

      <FooterBanner banner={banner} />
    </div>
  );
};

export default Hero_Footer;
