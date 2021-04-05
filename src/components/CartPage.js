import React, { useEffect, useState } from "react";
import CartProductCard from "./CartProductCard";
import Footer from "./Footer";

export default function CartPage({ cartProducts, setCartProducts }) {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let gin = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      gin += cartProducts[i].wholePrice;
    }
    setTotalPrice(gin);
  }, [cartProducts]);
  return (
    <div className="container" id="orders">
      <h1 className="display-4 ">Orders</h1>

      {cartProducts.length > 0
        ? cartProducts.map((product) => {
            return <CartProductCard product={product} key={product.id} cartProducts={cartProducts} setCartProducts={setCartProducts} />;
          })
        : null}

      <h1 className="text-danger mt-5 "> {totalPrice}$</h1>

      <div className=" mt-2 mb-2 ">
        <a
          href="#"
          data-toggle="modal"
          data-target="#SiModal"
          className="col-12"
        >
          <button type="button" className="btn btn-danger">
            Register
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
}
