import React from "react";

export default function ShopPage() {
  return (
      <div className="container">
        <div className="row">
          <div className="card col-md-3 d-none d-md-block" style={{width: "18rem"}}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h3>Price</h3>
              </li>
              <li className="list-group-item">
                <div className="form-group">
                  <label htmlFor="formControlRange">
                    Price'<br/>-50,000֏ - +500,000֏
                  </label>
                  <input
                    type="range"
                    className="form-control-range"
                    id="formControlRange"
                  />
                </div>
              </li>
              <li className="list-group-item">
                <h3>Brands</h3>
              </li>
              <li className="list-group-item">
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-6">
                      <a href="">
                        <img
                          src="https://mobilecentre.am/img/brands/34e57dacf55e24d38d7d6.png"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="col-xl-6">
                      <a href="">
                        <img
                          src="https://w7.pngwing.com/pngs/986/821/png-transparent-nokia-logo-nokia-lumia-900-logo-nokia-ozo-smartphone-lenovo-logo-blue-electronics-company.png"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="col-xl-6">
                      <a href="">
                        <img
                          src="https://mobilecentre.am/img/brands/b136b1d0734a1f3d10dd1.png"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="col-xl-6">
                      <a href="">
                        <img
                          src="https://mobilecentre.am/img/brands/cef1fcb344a1664835442.png"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="col-xl-6">
                      <a href="">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/LG_Logo_Slogan_3d.svg/1024px-LG_Logo_Slogan_3d.svg.png"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="col-xl-6">
                      <a href="">
                        <img
                          src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo-1961%E2%80%931962.png"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <h3>Special offer</h3>
              </li>
              <li className="list-group-item">
                <div className="col-12  ">
                  <button type="button" className="btn btn-danger  ">
                    Gif
                  </button>
                  <button type="button" className="btn btn-danger">
                    Discounts
                  </button>
                </div>
                <div className="col-12 mt-1">
                  <button type="button" className="btn btn-danger">
                    Discounts
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <div className=" col-md-9">
            <div>
              <div className=" row">
                <div className="col-md-3  ">
                  <img
                    src="https://www.cyberpowerpc.com/images/cs/h550/cs-450-150_220.png?v1"
                    className="img-fluid "
                  />
                </div>
                <div className="col-md-6 ">
                  <a href="#">GAMER ESSENTIAL ESPORTS</a>
                  <br/>
                  <ul>
                    <li className="text-danger">Windows 10 Home</li>
                    <li>AMD Ryzen 5 3600 Processor</li>
                    <li>AMD RX 580 8GB Graphics</li>
                    <li>16GB ADATA XPG Z1 3000MHz RAM</li>
                    <li>GIGABYTE X570 UD Motherboard</li>
                  </ul>
                </div>
                <div className="col-xl-3 ml-auto  mb-auto">
                  <a href="product.html">
                    <button
                      type="button"
                      className="btn btn-danger btn-md btn-block"
                    >
                      Wish list
                    </button>
                  </a>
                  <br/>
                  <a href="product.html">
                    <button
                      type="button"
                      className="btn btn-secondary btn-md btn-block"
                    >
                      Buy
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className=" row">
              <div className="col-md-3  ">
                <img
                  src="https://www.cyberpowerpc.com/images/cs/Syber_L/cs-192-202_220.png"
                  className="img-fluid "
                ></img>
              </div>
              <div className="col-md-6 ">
                <a href="#">GAMER ESSENTIAL ESPORTS</a>
                <br/>
                <ul>
                  <li className="text-danger">Windows 10 Home</li>
                  <li>AMD Ryzen 5 3600 Processor</li>
                  <li>AMD RX 580 8GB Graphics</li>
                  <li>16GB ADATA XPG Z1 3000MHz RAM</li>
                  <li>GIGABYTE X570 UD Motherboard</li>
                </ul>
              </div>
              <div className="col-xl-3 ml-auto  mb-auto">
                <a href="product.html">
                  <button type="button" className="btn btn-danger btn-md btn-block">
                    Wish list
                  </button>
                </a>
                <br/> 
                <a href="product.html">
                  <button
                    type="button"
                    className="btn btn-secondary btn-md btn-block"
                  >
                    Buy
                  </button>
                </a>
              </div>
            </div>

            <div className=" row">
              <div className="col-md-3  ">
                <img
                  src="https://www.cyberpowerpc.com/images/cs/eluna242v/CS-450-138_220.png"
                  className="img-fluid "
                />
              </div>
              <div className="col-md-6 ">
                <a href="#">GAMER ESSENTIAL ESPORTS</a>
                <br/>
                <ul>
                  <li className="text-danger">Windows 10 Home</li>
                  <li>AMD Ryzen 5 3600 Processor</li>
                  <li>AMD RX 580 8GB Graphics</li>
                  <li>16GB ADATA XPG Z1 3000MHz RAM</li>
                  <li>GIGABYTE X570 UD Motherboard</li>
                </ul>
              </div>
              <div className="col-xl-3 ml-auto  mb-auto">
                <a href="product.html">
                  <button type="button" className="btn btn-danger btn-md btn-block">
                    Wish list
                  </button>
                </a>
                <br/> 
                <a href="product.html">
                  <button
                    type="button"
                    className="btn btn-secondary btn-md btn-block"
                  >
                    Buy
                  </button>
                </a>
              </div>
            </div>

            <div className=" row">
              <div className="col-md-3  ">
                <img
                  src="https://www.cyberpowerpc.com/images/cs/h550/cs-450-150_220.png?v1"
                  className="img-fluid "
                />
              </div>
              <div className="col-md-6 ">
                <a href="#">GAMER ESSENTIAL ESPORTS</a>
                <br/>
                <ul>
                  <li className="text-danger">Windows 10 Home</li>
                  <li>AMD Ryzen 5 3600 Processor</li>
                  <li>AMD RX 580 8GB Graphics</li>
                  <li>16GB ADATA XPG Z1 3000MHz RAM</li>
                  <li>GIGABYTE X570 UD Motherboard</li>
                </ul>
              </div>
              <div className="col-xl-3 ml-auto  mb-auto">
                <a href="product.html">
                  <button type="button" className="btn btn-danger btn-md btn-block">
                    Wish list
                  </button>
                </a>
                <br/>
                <a href="product.html">
                  <button
                    type="button"
                    className="btn btn-secondary btn-md btn-block"
                  >
                    Buy
                  </button>
                </a>
              </div>
            </div>

            <div>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
  );
}
