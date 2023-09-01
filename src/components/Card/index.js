import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          width={32}
          height={32}
          src="/img/heart-deactivated.svg"
          alt="Add to wishlist"
        />
      </div>
      <img width={133} height={112} src={props.photo} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button onClick={props.onClickPlus} className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Add to cart" />
        </button>
      </div>
    </div>
  );
}

export default Card;