import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            className="main_img"
            src={
              import.meta.env.VITE_API_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt="main image"
          />
          {item.attributes?.img2?.data && (
            <img
              className="second_img"
              src={
                import.meta.env.VITE_API_UPLOAD_URL +
                item.attributes?.img2?.data?.attributes?.url
              }
              alt="second image"
            />
          )}
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>₹{item.oldPrice || item?.attributes.price + 68}</h3>
          <h3>₹{item.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
