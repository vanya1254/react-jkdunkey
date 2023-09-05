import React from "react";
import styles from "./Card.module.scss";

function Card({ onFavorite, onPlus, title, photo, price }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, photo, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          width={32}
          height={32}
          src={
            isFavorite
              ? "/img/heart-activated.svg"
              : "/img/heart-deactivated.svg"
          }
          alt="Add to wishlist"
          onClick={onClickFavorite}
        />
      </div>
      <img width={133} height={112} src={photo} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Add to cart"
        />
      </div>
    </div>
  );
}

export default Card;
