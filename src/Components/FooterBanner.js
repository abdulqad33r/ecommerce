import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../client";

const FooterBanner = ({
  banner: {
    discount,
    largeText2,
    saleTime,
    smallText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner">
      <div>
        <div>
          <p className="footer-discount">{discount}</p>
          <p className="footer-largeText2">{largeText2}</p>
          <p className="footer-saleTime">{saleTime}</p>
        </div>

        {image && (
          <img
            src={urlFor(image)}
            alt="headphones"
            className="footer-banner-image"
          />
        )}

        <div>
          <p className="smallText">{smallText}</p>
          <p className="footer-largeText1">{product}</p>
          <p className="description">{desc}</p>

          <Link to="/ecommerce/product/wireless-headphones2">
            <button className="footerBanner-btn">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
