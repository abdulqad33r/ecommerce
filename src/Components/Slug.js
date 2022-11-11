import React from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

const Slug = ({ products }) => {
  const { mySlug } = useParams();
  return (
    <div>
      <ProductDetails mySlug={mySlug} />

      <p className="you-may-like">You may also like</p>
      <div className="marquee">
        <div className="track">
          {products?.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slug;
