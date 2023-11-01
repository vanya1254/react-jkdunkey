import Card from "../components/Card";
import { LiaTrashAltSolid } from "react-icons/lia";

function Home({
  cartItems,
  searchValue,
  onChangeSearchInput,
  onClickClear,
  sneakers,
  onAddToCart,
  onAddToFavorite,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex align-center justify-center">
          <img width={18} height={18} src="/img/search.svg" alt="search" />
          <input
            onChange={onChangeSearchInput}
            placeholder="Поиск..."
            value={searchValue}
          />
          {searchValue && (
            <LiaTrashAltSolid className="clear cu-p" onClick={onClickClear} />
          )}
        </div>
      </div>
      <div className="cards d-flex flex-wrap">
        {sneakers
          .filter((sneaker) =>
            sneaker.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={(obj) => onAddToFavorite(obj)}
              added={cartItems.some(
                (obj) => Number(obj.id) === Number(item.id)
              )}
              loading={true}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
