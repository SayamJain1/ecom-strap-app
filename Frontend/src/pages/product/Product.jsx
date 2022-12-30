import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

function Product() {
  const dispatch = useDispatch();
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  console.log(data);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={
              import.meta.env.VITE_API_UPLOAD_URL +
              data?.attributes?.img?.data?.attributes?.url
            }
            alt="first image"
            onClick={(e) => setSelectedImg("img")}
          />
          {data?.attributes?.img2?.data && (
            <img
              src={
                import.meta.env.VITE_API_UPLOAD_URL +
                data?.attributes?.img2?.data?.attributes?.url
              }
              alt="second image"
              onClick={(e) => setSelectedImg("img2")}
            />
          )}
        </div>
        <div className="mainImg">
          <img
            src={
              import.meta.env.VITE_API_UPLOAD_URL +
              data?.attributes[selectedImg]?.data?.attributes?.url
            }
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price">₹{data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button
          className="add"
          onClick={() =>
            dispatch(
              addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                price: data.attributes.price,
                img: data.attributes.img.data.attributes.url,
                quantity,
              })
            )
          }
        >
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
