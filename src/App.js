import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

const sneakers = [
  {
    id: 1,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    photo: "/img/sneakers/1.jpg",
  },
  {
    id: 2,
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    photo: "/img/sneakers/2.jpg",
  },
  {
    id: 3,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    photo: "/img/sneakers/3.jpg",
  },
  {
    id: 4,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    photo: "/img/sneakers/4.jpg",
  },
  {
    id: 5,
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 15199,
    photo: "/img/sneakers/5.jpg",
  },
  {
    id: 6,
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 11299,
    photo: "/img/sneakers/6.jpg",
  },
  {
    id: 7,
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 10799,
    photo: "/img/sneakers/7.jpg",
  },
  {
    id: 8,
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: 16499,
    photo: "/img/sneakers/8.jpg",
  },
  {
    id: 9,
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    price: 13999,
    photo: "/img/sneakers/9.jpg",
  },
  {
    id: 10,
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: 11299,
    photo: "/img/sneakers/10.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center justify-center">
            <img width={18} height={18} src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {sneakers.map((obj, key) => (
            <Card
              key={key}
              id={obj.id}
              title={obj.title}
              price={obj.price}
              photo={obj.photo}
              onClickPlus={() => obj}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
