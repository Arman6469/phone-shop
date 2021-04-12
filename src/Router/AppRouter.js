import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShopPage from "../components/ShopPage/ShopPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import App from "../components/App";
import ProductPage from "../components/ProductPage";
import CartPage from "../components/CartPage";

export default function AppRouter() {
  const products = [
    {
      title: "Galaxy Note20",
      id: 1,
      type: "phone",
      img:
        "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-note/11092020/Red-N20__0002_SM-N980-981_GalaxyNote20_Front_Pen_Red_RawGallery-1600x1200.jpg?$product-details-jpg$",
      cardText: "SM-N770FZKMSER",
      sale: "Скидка 5 000 руб. по промокоду LETO2020",
      control: "Дистанционное управление S Pen",
      charachter1: "Иммерсивный экран 6.7”",
      price: 300,
    },
    {
      title: "Galaxy",
      id: 2,
      type: "phone",
      img:
        "https://images.samsung.com/is/image/samsung/ru-galaxy-note10-plus-sm-n975-sm-n975fzkdser-frontaurablack-thumb-178382664?$PF_PRD_PNG$",
      cardText: "SM-N770FZKMSER",
      sale: "Скидка 5 000 руб. по промокоду LETO2020",
      control: "Дистанционное управление S Pen",
      charachter1: "Иммерсивный экран 6.7”",
      price: 400,
    },
    {
      title: " Note20",
      id: 3,
      type: "phone",
      img:
        "https://images.samsung.com/is/image/samsung/ru-galaxy-note10-lite-sm-n770fzkmser-aurablack-thumb-209765934?$PF_PRD_PNG$",
      cardText: "SM-N770FZKMSER",
      sale: "Скидка 5 000 руб. по промокоду LETO2020",
      control: "Дистанционное управление S Pen",
      charachter1: "Иммерси7”",
      price: 450,
    },
    {
      title: "Ipad Air",
      id: 4,
      type: "tablet",
      img:
        "https://brain-images-ssl.cdn.dixons.com/1/8/10210781/u_10210781.jpg",
      cardText: "SM-N770FZKMSER",
      sale: "Скидка 5 000 руб. по промокоду LETO2020",
      control: "Дистанционное управление S Pen",
      charachter1: "Иммерси7”",
      price: 450,
    },
    {
      title: "Ipad Pro",
      id: 5,
      type: "tablet",
      img:
        "https://www.powerplanetonline.com/cdnassets/ipad_pro_2020_12_9_128gb_wifi_plata_01_l.jpg",
      cardText: "SM-N770FZKMSER",
      sale: "Скидка 5 000 руб. по промокоду LETO2020",
      control: "Дистанционное управление S Pen",
      charachter1: "Иммерси7”",
      price: 450,
    },
    {
      title: "Galaxy Tab A8",
      id: 6,
      type: "tablet",
      img:
        "https://brain-images-ssl.cdn.dixons.com/3/5/10197653/u_10197653.jpg",
      cardText: "SM-N770FZKMSER",
      sale: "Скидка 5 000 руб. по промокоду LETO2020",
      control: "Дистанционное управление S Pen",
      charachter1: "Иммерси7”",
      price: 450,
    },
    {
      title: "Galaxy Tab A8",
      id: 7,
      type: "tablet",
      img:
        "https://brain-images-ssl.cdn.dixons.com/3/5/10197653/u_10197653.jpg",
      cardText: "SM-N770FZKMSER",
      sale: "Скидка 5 000 руб. по промокоду LETO2020",
      control: "Дистанционное управление S Pen",
      charachter1: "Иммерси7”",
      price: 450,
    },
  ];

  const [cartProducts, setCartProducts] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <App products={products} />
        </Route>
        <Route path="/shop">
          <ShopPage initialProducts={products} />
        </Route>
        <Route path="/product/:id">
          <ProductPage
            products={products}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        </Route>
        <Route path="/cart">
          <CartPage
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
