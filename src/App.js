import Header from "./components/Header";
import Drawer from "./components/Drawer";

import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";

import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import AppContext from "./context";

function App() {
  const [sneakers, setSneakers] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const [sneakersResponse, cartResponse, wishlistResponse] =
          await Promise.all([
            axios.get("https://64e491d8c5556380291370e6.mockapi.io/sneakers"),
            axios.get("https://64e491d8c5556380291370e6.mockapi.io/cart"),
            // axios.get("https://64e491d8c5556380291370e6.mockapi.io/wishlist"),
          ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        // setFavorites(wishlistResponse.data);
        setSneakers(sneakersResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const onClickCart = () => {
    setCartOpened(!cartOpened);
  };

  const onAddToFavorite = async (item) => {
    try {
      if (favorites.find((favItem) => Number(favItem.id) === Number(item.id))) {
        axios.delete(
          `https://64e491d8c5556380291370e6.mockapi.io/wishlist/${item.id}`
        );
        setFavorites((prev) =>
          prev.filter((favItem) => Number(favItem.id) !== Number(item.id))
        );
      } else {
        const { data } = await axios.post(
          "https://64e491d8c5556380291370e6.mockapi.io/wishlist",
          item
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
      console.log(error);
    }
  };

  const onAddToCart = async (item) => {
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
          `https://64e491d8c5556380291370e6.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, item]);
        const { data } = await axios.post(
          "https://64e491d8c5556380291370e6.mockapi.io/cart",
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
          })
        );
      }
    } catch (error) {
      alert("Не удалось получить корзину");
      console.log(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://64e491d8c5556380291370e6.mockapi.io/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Ошибка при удалении из корзины");
      console.log(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickClear = () => {
    setSearchValue("");
  };

  const isItemAdded = (id) => {
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
        <Header onClickWishlist={""} onClickCart={onClickCart} />

        <Routes>
          <Route
            path="react-jkdunkey"
            element={
              <Home
                sneakers={sneakers}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToCart={onAddToCart}
                onClickClear={onClickClear}
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
}

export default App;
