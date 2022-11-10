
import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "../components/Cart";
import AppContext from "../contex";


function Orders() {
  const { onAddToFavorite, onAddToCart } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://635c1c82fc2595be2640e417.mockapi.io/orders');
    setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
    setIsLoading(false);
      } catch (error) { 
        alert('Fail...')
        console.error(error);
      }
    })();
  }, [])

    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>"`My orders"</h1>
       </div>
       <div className="d-flex flex-wrap">
       {(isLoading ? [...Array(10)] : orders).map((item, index) => (
          <Cart 
          key={index}
          loading={isLoading}
          {...item}/>
        ))}
       </div>
      </div>
    );
}

export default Orders;