import React from "react";
import { Link, useParams } from "react-router-dom";
import { urlFor } from "../client";
import { useStateContext } from "./Context/StateContext";

const Product = ({ product: { image, name, slug, price } }) => {
  const { setQty } = useStateContext();
  const { mySlug } = useParams();

  return (
    <Link to={`/ecommerce/product/${slug?.current}`}>
      <div
        className="product-card"
        onClick={() => mySlug !== slug?.current && setQty(1)}
      >
        <img
          src={urlFor(image && image[0])}
          width={230}
          height={230}
          className="product-image"
          alt=""
        />

        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
      </div>
    </Link>
  );
};

export default Product;
