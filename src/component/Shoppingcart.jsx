import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

function Shoppingcart() {
  const [product, setProduct] = useState([
    { id: 1, name: "áo thun", price: "50$" },
    { id: 2, name: "áo khoác", price: "25$" },
    { id: 3, name: "quần âu", price: "300$" }
  ]);
  //   state chứa  các sp đc thêm vào cart
  const [cartitem, setcartitem] = useState([]);
  const addtocart = (product) => {
    const exstingitem = cartitem.find((item) => item.id == product.id);
    if (exstingitem) {
      exstingitem.quantity += 1;
      setcartitem([...cartitem]);
    } else {
      setcartitem([...cartitem, { ...product, quantity: 1 }]);
    }
  };
  //   xây dựng hàm addtocart để truyền xuống component
  console.log(cartitem);
  //   làm modal hiển thị giổ hàng
  const [toggle, settogglecart] = useState(false);
  const handleupdateitem = (itemid, newQuantity) => {
    const updateitem = cartitem.map((item) =>
      item.id == itemid ? { ...item, quantity: newQuantity } : item
    );
    setcartitem(updateitem);
  };
  //   viết hàm xóa:
  const handledeleteitem = (itemid) => {
    const deleteitem = cartitem.filter((item) => item.id != itemid);
    setcartitem(deleteitem);
  };
  return (
    <div>
      Shoppingcart
      <ul>
        {product.map((element, index) => {
          return (
            <Product
              key={index}
              element={element}
              index={index}
              addtocart={addtocart}
            />
          );
        })}
      </ul>
      {/* div:giỏ hàng */}
      <div onClick={() => settogglecart(true)}>giỏ hàng:{cartitem.length}</div>
      {toggle && (
        <Cart
          settogglecart={settogglecart}
          cartitem={cartitem}
          handleupdateitem={handleupdateitem}
          handledeleteitem={handledeleteitem}
        />
      )}
    </div>
  );
}

export default Shoppingcart;
