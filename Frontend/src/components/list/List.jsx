import React from "react";
import useFetch from "../../useFetch";
import Card from "../card/Card";
import "./List.scss";

function List({ subCat, catId, maxPrice, sort }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCat.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  return (
    <div className="list">
      {loading
        ? "Loading..."
        : data?.map((item) => <Card key={item.key} item={item} />)}
    </div>
  );
}

export default List;
