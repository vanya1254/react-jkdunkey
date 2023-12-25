import Header from "./components/Header";
import Drawer from "./components/Drawer";

import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";

import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import AppContext from "./context";

export type SneakersType = {
  id: string;
  title: string;
  price: number;
  photo: string;
};

export type WishCartItemType = {
  id: string;
  parentId: string;
  title: string;
  photo: string;
  price: number;
};

const App: React.FC = () => {
  const [sneakers, setSneakers] = React.useState<SneakersType[]>([]);
  const [favorites, setFavorites] = React.useState<WishCartItemType[]>([]);
  const [cartItems, setCartItems] = React.useState<WishCartItemType[]>([]);
  const [cartOpened, setCartOpened] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const [sneakersResponse, cartResponse, wishlistResponse] =
          await Promise.all([
            axios.get("https://1bf8f65e61b65be1.mokky.dev/sneakers"),
            axios.get("https://1bf8f65e61b65be1.mokky.dev/cart"),
            axios.get("https://1bf8f65e61b65be1.mokky.dev/wishlist"),
          ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(wishlistResponse.data);
        setSneakers(sneakersResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const onClickCart = () => {
    setCartOpened(!cartOpened);
  };

  const onAddToFavorite = async (item: any) => {
    try {
      if (
        favorites.find((favItem: any) => Number(favItem.id) === Number(item.id))
      ) {
        axios.delete(`https://1bf8f65e61b65be1.mokky.dev/wishlist/${item.id}`);
        setFavorites((prev: any) =>
          prev.filter((favItem: any) => Number(favItem.id) !== Number(item.id))
        );
      } else {
        const { data } = await axios.post(
          "https://1bf8f65e61b65be1.mokky.dev/wishlist",
          item
        );
        setFavorites((prev: any) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
      console.log(error);
    }
  };

  const onAddToCart = async (item: WishCartItemType) => {
    try {
      const findItem = cartItems.find(
        (cartItem) => Number(cartItem.parentId) === Number(item.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter(
            (cartItem) => Number(cartItem.parentId) !== Number(item.id)
          )
        );
        await axios.delete(
          `https://1bf8f65e61b65be1.mokky.dev/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, item]);
        const { data } = await axios.post(
          "https://1bf8f65e61b65be1.mokky.dev/cart",
          item
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Не удалось получить корзину");
      console.log(error);
    }
  };

  const onRemoveItem = (id: Number) => {
    try {
      axios.delete(`https://1bf8f65e61b65be1.mokky.dev/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Ошибка при удалении из корзины");
      console.log(error);
    }
  };

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onClickClear = () => {
    setSearchValue("");
  };

  const isItemAdded = (id: number) => {
    return cartItems.some((item) => Number(item.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        sneakers,
        favorites,
        cartItems,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        {
          <Drawer
            items={cartItems}
            onClickRemove={onRemoveItem}
            onClickOut={onClickCart}
            opened={cartOpened}
          />
        }
        <Header onClickCart={onClickCart} />

        <Routes>
          <Route
            path="react-jkdunkey"
            element={
              <Home
                sneakers={sneakers}
                searchValue={searchValue}
                // setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToCart={onAddToCart}
                onClickClear={onClickClear}
                onAddToFavorite={onAddToFavorite}
                isLoading={isLoading}
              />
            }
          ></Route>
          <Route path="react-jkdunkey/wishlist" element={<Wishlist />}></Route>
          <Route path="react-jkdunkey/orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
