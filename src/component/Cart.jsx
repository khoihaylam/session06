import React from "react";

function Cart({ settogglecart, cartitem, handleupdateitem, handledeleteitem }) {
  console.log(cartitem);
  return (
    <div>
      Cart
      <h3 style={{ display: "inline-block" }}>cart product</h3>
      <br></br>
      <button onClick={() => settogglecart(false)}>close</button>
      {cartitem.map((element, index) => {
        return (
          <div key={element.id}>
            {element.name}-{element.price}
            <button
              onClick={() => handleupdateitem(element.id, element.quantity - 1)}
              disabled={element.quantity <= 1}
            >
              -
            </button>
            <span>{element.quantity}</span>
            <button
              onClick={() => handleupdateitem(element.id, element.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => handledeleteitem(element.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
