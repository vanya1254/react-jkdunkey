import React, { Dispatch, SetStateAction } from "react";
import { WishCartItemType, SneakersType } from "./App";

interface AppContextInterface {
  sneakers: SneakersType[];
  favorites: WishCartItemType[];
  cartItems: WishCartItemType[];
  isItemAdded: (id: number) => boolean;
  onAddToFavorite: (item: any) => Promise<void>;
  onAddToCart: (item: WishCartItemType) => Promise<void>;
  setCartItems: Dispatch<SetStateAction<WishCartItemType[]>>;
}

const AppContext = React.createContext<AppContextInterface>({
  sneakers: [],
  favorites: [],
  cartItems: [],
  isItemAdded: () => false,
  onAddToFavorite: () => new Promise(() => {}),
  onAddToCart: () => new Promise(() => {}),
  setCartItems: () => {},
});

export default AppContext;
