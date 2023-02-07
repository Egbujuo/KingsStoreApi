import React from "react";
import "../styles/Cart.css";

const Cart = ({ newCart, increase, decrease }) => {
  return (
    <div className="cart-container">
      {newCart.map((each) => {
        return (
          <div className="cart-wrap" key={each.id}>
            <div className="cart-img">
              <div>
                <img src={each.images[0]} alt="" />
              </div>
              <div className="cart-text">
              <p>{each.title}</p>
              <p>{each.description}</p>
              </div>
            </div>
            <div>
              <p>${each.price}</p>
              <div className="btn-increase">
              <button
                onClick={() => {
                  increase(each);
                }}
              >
                +
              </button>
              <p>{each.quantity}</p>
              <button
                onClick={() => {
                  decrease(each);
                }}
              >
                -
              </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
