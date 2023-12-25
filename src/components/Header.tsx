import { Link } from "react-router-dom";
import React from "react";

import { useCart } from "../hooks/useCart";

type HeaderProps = {
  onClickCart: React.MouseEventHandler<HTMLLIElement>;
};

const Header: React.FC<HeaderProps> = ({ onClickCart }) => {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to={"react-jkdunkey/"}>
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="Logo JKDunkey" />
          <div>
            <h3 className="text-uppercase">JKDunkey</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex justify-between">
        <li onClick={onClickCart} className="d-flex mr-20 cu-p">
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
          <Link to={"react-jkdunkey/wishlist"}>
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
          <Link to={"react-jkdunkey/orders"}>
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
};

export default Header;
