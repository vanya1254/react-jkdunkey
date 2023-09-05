function Drawer({ onClickOut, items = [] }) {
  return (
    <div className="overlay">
      <div onClick={onClickOut} className="overlay-reset"></div>
      <div className="drawer">
        <h2 className="mb-30">Корзина</h2>
        <div className="items">
          {items.map((obj, key) => (
            <div key={key} className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.photo})` }}
                className="cartItemImage mr-20"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img
                className="removeBtn"
                width={32}
                height={32}
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Order" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
