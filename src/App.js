import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";
import React from "react";

function App() {
  const [sneakers, setSneakers] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://64e491d8c5556380291370e6.mockapi.io/sneakers")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setSneakers(json);
      });
  }, []);

  const onClickCart = () => {
    setCartOpened(!cartOpened);
  };

  const onAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClickOut={onClickCart} />}
      <Header onClickCart={onClickCart} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center justify-center">
            <img width={18} height={18} src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="cards d-flex flex-wrap">
          {sneakers.map((item, key) => (
            <Card
              key={key}
              id={item.id}
              title={item.title}
              price={item.price}
              photo={item.photo}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={() => item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
