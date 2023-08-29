function App() {
  return (
    <div className="wrapper clear">
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
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="card">
          <button className="button">
            <image
              width={14.4}
              height={12.8}
              src="/img/wish.svg"
              alt="Add to wishlist"
            />
          </button>
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
