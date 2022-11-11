import React, { useEffect, useState } from "react";
import { client, urlFor } from "../client";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useStateContext } from "./Context/StateContext";

const ProductDetails = ({ mySlug }) => {
  const [product, setProduct] = useState();
  const [index, setIndex] = useState(0);

  const { qty, incQty, decQty, onAdd } = useStateContext();

  const { image, details, name, price } = product || {};

  const fetchData = async () => {
    const productQuery = `*[_type == "product" && slug.current == '${mySlug}'][0]`;
    const sanityProduct = await client.fetch(productQuery);
    setProduct(sanityProduct);
  };

  useEffect(() => {
    fetchData();
  }, [mySlug]);

  return (
    <div className="productDetails">
      <div className="productDetails_images-container">
        <div>
          {image && (
            <img
              src={urlFor(image[index])}
              width={350}
              height={350}
              className="productDetails-image"
              alt=""
            />
          )}
        </div>
        <div className="productDetails-small-images">
          {image &&
            image.map((item, i) => (
              <img
                key={i}
                src={urlFor(item && item)}
                className={i === index ? "selected-image" : "small-image"}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
        </div>
      </div>

      <div className="productDetails-details">
        <p className="details-name">{name}</p>

        <div className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>

        <p className="details-details">Details:</p>
        <p>{details}</p>
        <p className="details-price">${price}</p>

        <div className="details-quantity">
          <p className="quantity">Quantity:</p>

          <div className="counter">
            <button onClick={decQty}>-</button>
            <p>{qty}</p>
            <button onClick={incQty}>+</button>
          </div>
        </div>

        <div className="details-cartButtons">
          <button onClick={() => onAdd(product, qty)}>Add to cart</button>
          <button>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
