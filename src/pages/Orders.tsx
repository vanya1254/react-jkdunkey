import React from "react";
import axios from "axios";

import Card from "../components/Card";
import AppContext from "../context";
import { WishCartItemType } from "../App";

type OrderType = {
  items: WishCartItemType[];
  id: number;
};

const Orders: React.FC = () => {
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState<OrderType[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const { data } = await axios.get(
          "https://1bf8f65e61b65be1.mokky.dev/orders"
        );

        // const data: OrderType[] = res.data;

        setOrders(
          data.reduce(
            (prev: OrderType[], obj: OrderType) => [...prev, ...obj.items],
            []
          )
        );
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при загрузке заказов");
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>
      <div className="cards d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card
            key={index}
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
