function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Корзина</h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImage mr-20"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                width={32}
                height={32}
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
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

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logo JKDunkey" />
          <div>
            <h3 className="text-uppercase">JKDunkey</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
            <span>1205 руб.</span>
          </li>
          <li className="mr-30">
            <img width={18} height={18} src="/img/wish.svg" alt="Wishlist" />
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="Profile" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center justify-center">
            <img width={18} height={18} src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="card">
          <div className="favorite">
            <img
              width={32}
              height={32}
              src="/img/heart-deactivated.svg"
              alt="Add to wishlist"
            />
          </div>
          <img
            width={133}
            height={112}
            src="/img/sneakers/1.jpg"
            alt="Sneakers"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img
                width={11}
                height={11}
                src="/img/plus.svg"
                alt="Add to cart"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
