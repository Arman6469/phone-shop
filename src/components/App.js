import React from "react";
import ProductCard from "./ProductCard";

export default function App({ products }) {
  return (
    <div>
      <div
        className="alert alert-dark alert-dismissible fade show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418"
            className="img-fluid"
            width="40px"
            alt="#"
          />
          <strong className="mr-auto">Stock 899$</strong>
          <small>11 mins ago</small>
          <button
            type="button"
            className="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="toast-body">Hello, Have a gift</div>

        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div
        id="carouselExampleCaptions"
        className="carousel slide d-none d-lg-block"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video
              playsInline="playsinline"
              autoPlay="autoplay"
              muted="muted"
              loop="loop"
            >
              <source
                src="https://images.samsung.com/is/content/samsung/assets/ru/p6_gro1/p6_initial_pfs-home_local/s20kv_1460.mp4"
                type="video/mp4"
              />
            </video>
            <div className="carousel-caption d-none d-md-block">
              <a href="product.html">
                <button type="button" className="btn btn-dark">
                  <h2>Buy Now</h2>
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <video
              playsInline="playsinline"
              autoPlay="autoplay"
              muted="muted"
              loop="loop"
            >
              <source
                src="https://images.samsung.com/is/content/samsung/assets/ru/p6_gro1/p6_initial_home/200616_Unrivaled_QLED_8K_PC_1440x640.mp4"
                type="video/mp4"
              />
            </video>
            <div className="carousel-caption d-none d-md-block">
              <h1>QLED 8K</h1>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* //////////////////////////////////////////// */}

      <div className="container bg-secondary ">
        <h1 className="text-center"> Discounts </h1>
        <div className="row m-auto  ">
          {products.length != 0
            ? products.map((product) => {
                return <ProductCard product={product} key={product.id} />;
              })
            : null}
          {/* <div class="card col-12 col-md-3" style="width: 15rem;">
                 <img class="card-img-top img-fluid " src="">
                 <div class="card-body">
                   <h5 class="card-title">Galaxy Note 10+</h5>
                   <p class="card-text">SM-N770FZKMSER</p>
                 </div>
                 <ul class="list-group list-group-flush">
                   <li class="list-group-item">Скидка 5 000 руб. по промокоду LETO2020</li>
                   <li class="list-group-item">Дистанционное управление S Pen</li>
                   <li class="list-group-item">Иммерсивный экран 6.7”</li>
                   <li class="list-group-item h4">39 990 ₽”</li>
                 </ul>
                 <div class="card-body">
                   <a href="product.html" class="btn btn-danger">Buy Now</a>
                 </div>
             </div>
             
             <div class="card col-12 col-md-3" style="width: 15rem;">
                 <img class="card-img-top img-fluid " src=" alt="Card image cap">
                 <div class="card-body">
                   <h5 class="card-title">Galaxy Note 10</h5>
                   <p class="card-text">SM-N770FZKMSER</p>
                 </div>
                 <ul class="list-group list-group-flush">
                   <li class="list-group-item">Скидка 5 000 руб. по промокоду LETO2020</li>
                   <li class="list-group-item">Дистанционное управление S Pen</li>
                   <li class="list-group-item">Иммерсивный экран 6.7”</li>
                   <li class="list-group-item h4">74 990 ₽”</li>
                 </ul>
                 <div class="card-body">
                   <a href="product.html" class="btn btn-danger">Buy Now</a>
                 </div>
             </div>
               
               <div class="card col-12 col-md-3" style="width: 15rem;">
                 <img class="card-img-top img-fluid " src="https://images.samsung.com/is/image/samsung/ru-galaxy-note9-n960-sm-n960fzkdser-frontblack-thumb-117704128?$PF_PRD_PNG$" alt="Card image cap">
                 <div class="card-body">
                   <h5 class="card-title">Galaxy Note 9</h5>
                   <p class="card-text">SM-N770FZKMSER</p>
                 </div>
                 <ul class="list-group list-group-flush">
                   <li class="list-group-item">Скидка 5 000 руб. по промокоду LETO2020</li>
                   <li class="list-group-item">Дистанционное управление S Pen</li>
                   <li class="list-group-item">Иммерсивный экран 6.7”</li>
                   <li class="list-group-item h4">60 990 ₽”</li>
                 </ul>
                 <div class="card-body">
                   <a href="product.html" class="btn btn-danger">Buy Now</a>
                 </div>
             </div>
               
               <div class="card col-12 col-md-3 " style="width: 15rem;">
                 <img class="card-img-top img-fluid  " src="https://images.samsung.com/is/image/samsung/ru-galaxy-note8-n950f-sm-n950fzkdser-frontblack-thumb-74636073?$PF_PRD_PNG$" alt="Card image cap">
                 <div class="card-body">
                   <h5 class="card-title">Galaxy Note 8</h5>
                   <p class="card-text">SM-N770FZKMSER</p>
                 </div>
                 <ul class="list-group list-group-flush">
                   <li class="list-group-item">Скидка 5 000 руб. по промокоду LETO2020</li>
                   <li class="list-group-item">Дистанционное управление S Pen</li>
                   <li class="list-group-item">Иммерсивный экран 6.7”</li>
                   <li class="list-group-item h4">45 990 ₽”</li>
                 </ul>
                 <div class="card-body">
                   <a href="#" class="btn btn-danger">Buy Now</a>
                 </div>
             </div>
               
               <div class="card col-12 col-md-3 " style="width: 15rem;">
                 <img class="card-img-top img-fluid " src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-201911?wid=443&amp;hei=535&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1584056222886" alt="Card image cap">
                 <div class="card-body">
                   <h5 class="card-title">iPad Air</h5>
                   <p class="card-text">SM-N770FZKMSER</p>
                 </div>
                 <ul class="list-group list-group-flush">
                   <li class="list-group-item">Скидка 5 000 руб. по промокоду LETO2020</li>
                   <li class="list-group-item">Дистанционное управление S Pen</li>
                   <li class="list-group-item">Иммерсивный экран 6.7”</li>
                   <li class="list-group-item h4">75 990 ₽”</li>
                 </ul>
                 <div class="card-body">
                   <a href="#" class="btn btn-danger">Buy Now</a>
                 </div>
             </div>
               
               <div class="card col-12 col-md-3 " style="width: 15rem;">
                 <img class="card-img-top img-fluid " src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-202005?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1587460552755" alt="Card image cap">
                 <div class="card-body">
                   <h5 class="card-title">MacBook Pro</h5>
                   <p class="card-text">SM-N770FZKMSER</p>
                 </div>
                 <ul class="list-group list-group-flush">
                   <li class="list-group-item">Скидка 5 000 руб. по промокоду LETO2020</li>
                   <li class="list-group-item">Дистанционное управление S Pen</li>
                   <li class="list-group-item">Иммерсивный экран 6.7”</li>
                   <li class="list-group-item h4">45 990 ₽”</li>
                 </ul>
                 <div class="card-body">
                   <a href="#" class="btn btn-danger">Buy Now</a>
                 </div>
             </div>
               
               <div class="card col-12 col-md-3 " style="width: 15rem;">
                 <img class="card-img-top img-fluid " src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-201911?wid=465&amp;hei=530&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1584056010058" alt="Card image cap">
                 <div class="card-body">
                   <h5 class="card-title">iPad Mini</h5>
                   <p class="card-text">SM-N770FZKMSER</p>
                 </div>
                 <ul class="list-group list-group-flush">
                   <li class="list-group-item">Скидка 5 000 руб. по промокоду LETO2020</li>
                   <li class="list-group-item">Дистанционное управление S Pen</li>
                   <li class="list-group-item">Иммерсивный экран 6.7”</li>
                   <li class="list-group-item h4">45 990 ₽”</li>
                 </ul>
                 <div class="card-body">
                   <a href="#" class="btn btn-danger">Buy Now</a>
                 </div>
             </div>
               
               
               
               <div class="card col-12 col-md-3 " style="width: 15rem;">
                 <img class="card-img-top img-fluid " src="https://appbar.shop/content/images/45/apple-watch-series-4-gps-44mm-gold-aluminum-case-with-pink-sand-sport-band-36051629342412_small11.jpeg" alt="Card image cap">
                 <div class="card-body">
                   <h5 class="card-title">Apple Watch Gold Aluminum Case with Sport Band</h5>
                   <p class="card-text">SM-N770FZKMSER</p>
                 </div>
                 <ul class="list-group list-group-flush ">
                   <li class="list-group-item">Скидка 5 000 руб. по промокоду LETO2020</li>
                   <li class="list-group-item">Дистанционное управление S Pen</li>
                   <li class="list-group-item">Иммерсивный экран 6.7”</li>
                   <li class="list-group-item h4">45 990 ₽”</li>
                 </ul>
                 <div class="card-body">
                   <a href="#" class="btn btn-danger">Buy Now</a>
                 </div>
             </div>
               
               <div class="card col-12 col-md " style="width: 15rem;">
                 <img class="card-img-top img-fluid " src="https://3dplanet.am/wp-content/uploads/2020/10/12_Pro_blue.jpg" alt="Card image cap">
                 <div class="card-body">
                   <h5 class="card-title"> iPhone 12</h5>
                   <p class="card-text">SM-N770FZKMSER</p>
                 </div>
                 <ul class="list-group list-group-flush ">
                   <li class="list-group-item">Скидка 5 000 руб. по промокоду LETO2020</li>
                   <li class="list-group-item">Дистанционное управление S Pen</li>
                   <li class="list-group-item">Иммерсивный экран 6.7”</li>
                   <li class="list-group-item h4">45 990 ₽”</li>
                 </ul>
                 <div class="card-body">
                   <a href="#" class="btn btn-danger">Buy Now</a>
                 </div>
             </div>
               
               <div class="card col-12 col-md " style="width: 15rem;">
                 <img class="card-img-top img-fluid " src="https://grifus.am/wp-content/uploads/2020/12/iphone-12-pro-max-gold-hero.png" alt="Card image cap">
                 <div class="card-body">
                   <h5 class="card-title">iPhone 12 Pro Max</h5>
                   <p class="card-text">SM-N770FZKMSER</p>
                 </div>
                 <ul class="list-group list-group-flush ">
                   <li class="list-group-item">Скидка 5 000 руб. по промокоду LETO2020</li>
                   <li class="list-group-item">Дистанционное управление S Pen</li>
                   <li class="list-group-item">Иммерсивный экран 6.7”</li>
                   <li class="list-group-item h4">45 990 ₽”</li>
                 </ul>
                 <div class="card-body">
                   <a href="#" class="btn btn-danger">Buy Now</a>
                 </div>
             </div>
               
               <div class="card col-12 col-md " style="width: 15rem;">
                 <img class="card-img-top img-fluid " src="https://fdn.gsmarena.com/imgroot/reviews/21/samsung-galaxy-s21-and-s21-ultra-handson/lifestyle/-1200w5/gsmarena_027.jpg" alt="Card image cap">
                 <div class="card-body">
                   <h5 class="card-title">Galaxy S21 5G</h5>
                   <p class="card-text">SM-N770FZKMSER</p>
                 </div>
                 <ul class="list-group list-group-flush ">
                   <li class="list-group-item">Скидка 5 000 руб. по промокоду LETO2020</li>
                   <li class="list-group-item">Дистанционное управление S Pen</li>
                   <li class="list-group-item">Иммерсивный экран 6.7”</li>
                   <li class="list-group-item h4">45 990 ₽”</li>
                 </ul>
                 <div class="card-body">
                   <a href="#" class="btn btn-danger">Buy Now</a>
                 </div>
             </div>
               
               <div class="card col-12 col-md " style="width: 15rem;">
                 <img class="card-img-top img-fluid " src="https://image-us.samsung.com/SamsungUS/home/mobile/wearables/smartwatches/pdp/galaxy-watch3/08-13-2020/gallery-01-110534-lte_sm-r850_galaxy_watch_3_41mm_mystic_bronze_v_front-1600x1200.jpg?$product-details-jpg$" alt="Card image cap">
                 <div class="card-body">
                   <h5 class="card-title">Galaxy Watch3 </h5>
                   <p class="card-text">SM-N770FZKMSER</p>
                 </div>
                 <ul class="list-group list-group-flush ">
                   <li class="list-group-item">Скидка 5 000 руб. по промокоду LETO2020</li>
                   <li class="list-group-item">Дистанционное управление S Pen</li>
                   <li class="list-group-item">Иммерсивный экран 6.7”</li>
                   <li class="list-group-item h4">45 990 ₽”</li>
                 </ul>
                 <div class="card-body">
                   <a href="#" class="btn btn-danger">Buy Now</a>
                 </div>
             </div>
                */}
        </div>
      </div>
    </div>
  );
}
