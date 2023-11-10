import { Link } from "react-router-dom";
import React from "react";

import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to={"react-jkdunkey"}>
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="Logo JKDunkey" />
          <div>
            <h3 className="text-uppercase">JKDunkey</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      {/* <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="img/cart.svg" alt="Cart" />
          <span>1205 руб.</span>
        </li>
        <li className="mr-30">
          <img width={18} height={18} src="img/wish.svg" alt="Wishlist" />
        </li>
        <li>
          <img width={18} height={18} src="img/user.svg" alt="Profile" />
        </li>
      </ul> */}
      <ul className="d-flex justify-between">
        <li onClick={props.onClickCart} className="d-flex mr-20 cu-p">
          <img
            width="18"
            height="18"
            src="img/cart.svg"
            alt="Cart"
            className="d-flex"
          />
          <span className="d-flex">{totalPrice} руб.</span>
        </li>
        <li className="d-flex mr-20 cu-p">
          <Link to={"/wishlist"}>
            <img
              width="18"
              height="18"
              src="img/wish.svg"
              alt="Wishlist"
              className="d-flex mr-5"
            />
          </Link>
        </li>
        <li className="d-flex">
          <Link to={"/orders"}>
            <img
              width="18"
              height="18"
              src="img/user.svg"
              alt="Profile"
              className="d-flex"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
