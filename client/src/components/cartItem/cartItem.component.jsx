import React from "react";
import "./cartItem.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt={`${name}`} />
    <span className="item-details">
      <span className="name">{name}</span>
      <span>
        {quantity} &times; ${price}
      </span>
    </span>
  </div>
);

export default React.memo(CartItem);
