import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const total = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };
  const stripePromise = loadStripe(
    "pk_test_51MJt5gSIccpoSPP9brPIBKkM6qMiRyY29lm4oCSFikAc72eMjRtYfPXBlrau3s1Bzo68M6FmlvSYdbu9CE2EhHej00vRoHqDs5"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products.length ? (
        products.map((item) => (
          <div className="item" key={item.id}>
            <img src={import.meta.env.VITE_API_UPLOAD_URL + item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className="price">
                {item.quantity} x ₹{item.price}
              </div>
            </div>
            <DeleteOutlinedIcon
              className="delete"
              onClick={() => dispatch(removeItem(item.id))}
            />
          </div>
        ))
      ) : (
        <div
          style={{
            textAlign: "center",
            marginBottom: "15px",
            fontSize: "19px",
          }}
        >
          Please add product to cart
        </div>
      )}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹{total()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset cart
      </span>
    </div>
  );
}

export default Cart;
