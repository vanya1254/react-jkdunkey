import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import AppContext from "../../context";

function Card({
  onFavorite,
  onPlus,
  id,
  title,
  photo,
  price,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, photo, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, photo, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={158}
          height={230}
          viewBox="0 0 158 230"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="143" rx="3" ry="3" width="158" height="15" />
          <rect x="0" y="162" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="10" rx="10" ry="10" width="158" height="117" />
          <rect x="126" y="198" rx="8" ry="8" width="32" height="32" />
          <rect x="0" y="198" rx="8" ry="8" width="80" height="32" />
        </ContentLoader>
      ) : (
        <>
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
              src={
                isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"
              }
              alt="Add to cart"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
