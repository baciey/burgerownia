import React from "react";

const MenuProduct = (props) => {
  const { id, name, price, ingredients } = props.product;
  return (
    <div className="product" key={id}>
      <div className="name-and-price">
        <span>{name}</span>
        <span>{price + " PLN"}</span>
      </div>
      <div className="ingredients">{ingredients}</div>
    </div>
  );
};

export default MenuProduct;
