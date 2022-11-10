import React from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './contex';
import Orders from './pages/Orders';



const handelError = (err) => {
  console.log("Ops...");
  console.error(err)
}

function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [serchValue, setSeachValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

     // console.log(cartItems);
      useEffect(() => {
     async function fetchData() {
     try {
     const itemsResponse = await axios.get(('https://635c1c82fc2595be2640e417.mockapi.io/cart'));
     const cartResponse = await axios.get(('https://635c1c82fc2595be2640e417.mockapi.io/favorites'));
     const favoritesResponse = await axios.get(('https://635c1c82fc2595be2640e417.mockapi.io/items'));
       
     setIsLoading(false);
     setItems(itemsResponse.data);
     setCartItems(cartResponse.data);
     setFavorites(favoritesResponse.data); 
     } catch (error) {
      alert('Opss...');
      console.log(error);
       }
     }
     fetchData();
    },[]).catch(handelError)


    const onAddToCart = async (obj) => {

      try {
        const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
        if(findItem) {
          setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
          await axios.get(`/cart/${findItem.id}`);
        } else { 
       setCartItems((prev) => [...prev, obj]);
       const { data } = await axios.post('https://635c1c82fc2595be2640e417.mockapi.io/cart/', obj);
       setCartItems((prev) => prev.map((item) => {
        if (item.parentId === data.parentId) {
          return {
            ...item,
            id: data.id,
          };
        }
        return item;
       }),
       );
       }
      } catch (error) {
        alert('Error....')
        console.log(error)
      }
    };

    const onRemoveItem = (id) => {
      // console.log(id)
      try {
        axios.delete(`https://635c1c82fc2595be2640e417.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
      } catch (error) {
        alert('Err')
        console.log(error)
      }
    };

    const onAddToFavorite =  async (obj) => {
      // console.log(obj)
       try {
        if(favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
          axios.delete(`https://635c1c82fc2595be2640e417.mockapi.io/favorites/${obj.id}`);
          setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        } else {
          const {data} = await axios.post('https://635c1c82fc2595be2640e417.mockapi.io/favorites/', obj);
          setFavorites((prev) => [...prev, data]);
          }
       } catch (error) {
        alert('Failed...');
        console.log(error);
       }
     };
    const onChangeSerchInput = (event) => {
      // console.log(event.target.value);
      setSeachValue(event.target.value);
    };

    const isItemAdded = (id) => {
       return cartItems.some((obj) => Number(obj.parentId) === Number(id));
    };

     return (
    <AppContext.Provider value={{
    cartItems, 
    favorites, 
    items, 
    isItemAdded, 
    onAddToFavorite,
    onAddToCart,
    setCartOpened,
    setCartItems,
    }}>
      <div className="wrapper clear">
      <Drawer 
      items={cartItems}  
      onCloseCart={() => setCartOpened(false)} 
      onRemove={onRemoveItem} 
      opened={cartOpened} /> 
     <Header onClickCart={() => setCartOpened(true)} />
    <Route path='' exact>
        <Home 
        items={items}
        cartItems={cartItems}
        serchValue={serchValue} 
        setSeachValue={setSeachValue} 
        onChangeSerchInput={onChangeSerchInput}
        onAddToFavorite={onAddToFavorite}
        onAddToCart={onAddToCart}
        isLoading={isLoading}
        />
    </Route>

    <Route path='favorites' exact>
       <Favorites />
    </Route>

    <Route path='orders' exact>
       <Orders />
    </Route>
    </div>
    </AppContext.Provider>
  );
}

export default App;


