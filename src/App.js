import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { client } from "./client";
import { Route, Routes } from "react-router-dom";
import Hero_Footer from "./Components/Hero_Footer";
import Slug from "./Components/Slug";
import { useStateContext } from "./Components/Context/StateContext";
import { Navigate } from "react-router";

function App() {
  const [banner, setBanner] = useState([]);
  const [products, setProducts] = useState();

  const { showCart } = useStateContext();

  const fetchData = async () => {
    const query = '*[_type == "banner"]';
    const bannerProducts = await client.fetch(query);
    setBanner(bannerProducts);

    const productsQuery = '*[_type == "product"]';
    const sanityProducts = await client.fetch(productsQuery);
    setProducts(sanityProducts);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.body.style.marginRight = "17px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
      document.body.style.margin = "0";
    }
  }, [showCart]);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/ecommerce"
          element={
            <Hero_Footer
              banner={banner.length && banner[0]}
              products={products}
            />
          }
        />
        <Route
          path="/ecommerce/product/:mySlug"
          element={<Slug products={products} />}
        />

        <Route path="*" element={<Navigate to="/ecommerce" replace />} />
      </Routes>
    </div>
  );
}

export default App;
