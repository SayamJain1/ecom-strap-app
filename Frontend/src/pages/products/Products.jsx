import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/list/List";
import "./Products.scss";
import useFetch from "../../useFetch";

function Products() {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState('asc');
  const [selectedSubCat, setselectedSubCat] = useState([]);

  const catId = parseInt(useParams().id);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setselectedSubCat(
      isChecked
        ? [...selectedSubCat, value]
        : selectedSubCat.filter((item) => item !== value)
    );
  };
  console.log(selectedSubCat);

  return (
    <div className="products">
      <div className="left">
        <div className="filter_item">
          <h2>Product categories</h2>
          {data?.map((item) => (
            <div className="input_item" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}

          {/* <div className="input_item">
            <input type="checkbox" id="second" value={2} />
            <label htmlFor="second">jeans</label>
          </div>
          <div className="input_item">
            <input type="checkbox" id="third" value={3} />
            <label htmlFor="third">shirts</label>
          </div> */}
        </div>
        <div className="filter_item">
          <h2>Filter by price</h2>
          <div className="input_item">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filter_item">
          <h2>sort by</h2>
          <div className="input_item">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (lowest first)</label>
          </div>
          <div className="input_item">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCat={selectedSubCat}
        />
      </div>
    </div>
  );
}

export default Products;
