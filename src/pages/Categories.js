import { useState, useEffect } from "react";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import productData from "../productData.json";
import Footer from "../components/Footer";

const Categories = () => {
  const [products, setProducts] = useState(productData);
  useEffect(() => {
    setProducts(productData);
  }, []);
  console.log(products);
  return (
    <div>
      Categories
      <Navbar />
      <div className="product_card_parent_grid">
        {products &&
          products.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              category={product.category}
              img={product.img}
              // link={product.link}
              products={products}
            />
          ))}
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Categories;
