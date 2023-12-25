import React, { MouseEventHandler } from "react";
import Card from "../components/Card";
import { LiaTrashAltSolid } from "react-icons/lia";

import { WishCartItemType, SneakersType } from "../App";

type HomeProps = {
  searchValue: string;
  onChangeSearchInput: React.ChangeEventHandler<HTMLInputElement>;
  onClickClear: MouseEventHandler<SVGElement>;
  sneakers: SneakersType[];
  onAddToCart: (item: WishCartItemType) => void;
  onAddToFavorite: (item: SneakersType) => void;
  isLoading: boolean;
};

const Home: React.FC<HomeProps> = ({
  searchValue,
  onChangeSearchInput,
  onClickClear,
  sneakers,
  onAddToCart,
  onAddToFavorite,
  isLoading,
}) => {
  const renderItems = () => {
    const filtredSneakers = sneakers.filter((sneaker) =>
      sneaker.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(12)] : filtredSneakers).map((item, index) => (
      <Card
        key={index}
        onPlus={(obj) => onAddToCart(obj)}
        onFavorite={(obj) => onAddToFavorite(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="top d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex align-center justify-center">
          <img width={18} height={18} src="img/search.svg" alt="search" />
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
      <div className="cards d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
