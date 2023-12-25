import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

const Wishlist = () => {
  const { favorites, onAddToFavorite, onAddToCart } =
    React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="cards d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card
            key={index}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={(obj) => onAddToFavorite(obj)}
            favorited={true}
            loading={false}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
