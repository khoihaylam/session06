import React from "react";

function Product({ element, index, addtocart }) {
  return (
    <div>
      <li>
        <h5>{element.name}</h5>
        <p>{element.price}</p>
        <button onClick={() => addtocart(element)}> add to cart</button>
      </li>
    </div>
  );
}

export default Product;
