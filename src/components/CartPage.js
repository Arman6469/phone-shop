import React, { useEffect, useState } from "react";
import CartProductCard from "./CartProductCard";
import { Link } from "react-router-dom";

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
            return (
              <CartProductCard
                product={product}
                key={product.id}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            );
          })
        : null}

      <h1 className="text-danger mt-5 "> {totalPrice}$</h1>

      <div className=" mt-2 mb-2 ">
        <button
          type="button"
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Register
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Check Out
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                    <label for="recipient-name" className="col-form-label">
                      Surname:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                    <label for="recipient-name" className="col-form-label">
                      Mail:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                    <div className="row justify-content-center align-items-center">
                      <div className="form-check ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          checked
                        />
                        <label
                          className="form-check-label col-3"
                          for="exampleRadios1"
                        >
                          <img
                            src="https://i.pinimg.com/originals/55/a3/c2/55a3c2e6e01843e209cf2c2b279363b9.png"
                            alt="visa"
                            className="img-fluid"
                          />
                        </label>
                      </div>

                      <div className="form-check col-6 ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          checked
                        />
                        <label
                          className="form-check-label col-3"
                          for="exampleRadios1"
                        >
                          <img
                            src="https://i.pinimg.com/originals/55/a3/c2/55a3c2e6e01843e209cf2c2b279363b9.png"
                            alt="visa"
                            className="img-fluid"
                          />
                        </label>
                      </div>
                    </div>

                    {/* <div className="row d-flex justify-content-center align-items-center">
                      <div
                        class="input-group-text col-1"
                        style={{ height: "40% !important" }}
                      >
                        <input
                          type="checkbox"
                          aria-label="Radio button for following text input"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src="https://i.pinimg.com/originals/55/a3/c2/55a3c2e6e01843e209cf2c2b279363b9.png"
                          alt="visa"
                          className="img-fluid"
                        />
                      </div>
                    </div> */}
                    {/* <div className="row d-flex justify-content-center align-items-center">
                      <div
                        class="input-group-text col-1"
                        style={{ height: "40% !important" }}
                      >
                        <input
                          type="checkbox"
                          aria-label="Radio button for following text input"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src="https://i.pinimg.com/originals/55/a3/c2/55a3c2e6e01843e209cf2c2b279363b9.png"
                          alt="visa"
                          className="img-fluid"
                        />
                      </div>
                    </div> */}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#exampleModal1"
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Check Out
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>You have spent {totalPrice}$</p>
              </div>
              <div className="modal-footer d-flex justify-content-center align-items-center">
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
