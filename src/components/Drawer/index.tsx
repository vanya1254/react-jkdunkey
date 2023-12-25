import React from "react";
import axios from "axios";
import classNames from "classnames";

import Info from "../Info";
import { useCart } from "../../hooks/useCart";

import styles from "./Drawer.module.scss";

import { WishCartItemType } from "../../App";

type DrawerProps = {
  onClickRemove: (id: number) => void;
  onClickOut: () => void;
  items: WishCartItemType[];
  opened: boolean;
};

const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const Drawer: React.FC<DrawerProps> = ({
  onClickRemove,
  onClickOut,
  items = [],
  opened,
}) => {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [isOrderComplete, setIsOrderComplete] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [orderId, setOrderId] = React.useState(null);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://1bf8f65e61b65be1.mokky.dev/orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://1bf8f65e61b65be1.mokky.dev/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Не удалось оформить заказ");
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div onClick={onClickOut} className={styles.overlay__reset}></div>
      <div className={styles.drawer}>
        <h2 className="mb-30">Корзина</h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className={styles.items}>
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.photo})` }}
                    className="cartItemImage mr-20"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{`${obj.price}`} руб.</b>
                  </div>
                  <img
                    onClick={() => onClickRemove(Number(obj.id))}
                    className="removeBtn"
                    width={32}
                    height={32}
                    src="img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className={styles.cartTotalBlock}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{Math.trunc(totalPrice * 0.05)} руб.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className={classNames("greenButton", styles.greenButton)}
              >
                Оформить заказ <img src="img/arrow.svg" alt="Order" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            image={
              isOrderComplete ? "img/complete-order.jpg" : "img/empty-cart.jpg"
            }
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
