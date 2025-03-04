import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  //   console.log(products);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  //   console.log(latestProducts);
  return (
    <div className="my-10">
      <div className="py-8 text-center text-3xl ">
        <Title title1={"LATEST"} title2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm-text-sm md-text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi vel
          in cupiditate quisquam aliquam? Laboriosam dignissimos corrupti sint
          voluptas sapiente!
        </p>
      </div>
      {/* Rendring products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
