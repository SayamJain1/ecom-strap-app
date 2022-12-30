import React from "react";
import useFetch from "../../useFetch";
import Chat from "../card/Card";
import "./FeaturedProducts.scss";

function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "something went wrong!"
          : loading
          ? "loading..."
          : data && data.map((item) => <Chat key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default FeaturedProducts;
