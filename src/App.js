import Header from './components/Header';
import Drawer from './components/Drawer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { createContext } from 'react';
import AppContext from './contex';



const handelError = (err) => {
  console.log("Ops...");
  console.error(err)
}

function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([]);
    const [fovorites, setFavorites] = useState([]);
    const [serchValue, setSeachValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
      useEffect(() => {
     async function fetchData() {
     const itemsResponse = await axios.get(('https://635c1c82fc2595be2640e417.mockapi.io/items'));
     const cartResponse = await axios.get(('https://635c1c82fc2595be2640e417.mockapi.io/cart'));
     const favoritesResponse = await axios.get(('https://635c1c82fc2595be2640e417.mockapi.io/favorites'));
       
     setIsLoading(false);

     setItems(itemsResponse.data);
     setCartItems(cartResponse.data);
     setFavorites(favoritesResponse.data); 
     }
     fetchData();
    },[]).catch(handelError)


    const onAddToCart = (obj) => {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios({
          method: 'delete',
          url: (`https://635c1c82fc2595be2640e417.mockapi.io/cart/${obj.id}`)
        })
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id))) 
      } else { 
     axios({
      method: 'post',
      url: ('https://635c1c82fc2595be2640e417.mockapi.io/cart', obj)
     })
      setCartItems(...cartItems, obj)
    }}

    const onRemoveItem = (id) => {
      // console.log(id)
      axios.delete((`https://635c1c82fc2595be2640e417.mockapi.io/cart/${id}`));
       setCartItems((prev) => prev.filter(item.id !== id))
    }

    const onAddToFavorite =  async (obj) => {
      // console.log(obj)
        if(fovorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
          axios.delete((`https://635c1c82fc2595be2640e417.mockapi.io/favorites/${obj.id}`));
          setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id))) 
        } else {
          const {data} = await axios.post('https://635c1c82fc2595be2640e417.mockapi.io/favorites/', obj);
          }
          setFavorites((prev) => [...prev, data]);
     }}
          axios.post('https://635c1c82fc2595be2640e417.mockapi.io/cart/', obj);
          setFavorites((prev) => [...prev, obj])

    const onChangeSerchInput = (event) => {
      console.log(event.target.value);
      setSeachValue(event.target.value);
    };

    const isItemAdded = (id) => {
       return cartItems.some((obj) => Number(obj.id) === Number(item.id));
    }

    return (
    <AppContext.Provider value={{cartItems, favorites, items, isItemAdded, onAddToFavorite, setCartOpened}}>
      <div className="wrapper clear">
     {cartOpened ? <Drawer items={cartItems}  onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem} /> : null}
     <Header onClickCart={() => setCartOpened(true)} />
    <Route path='/' exact>
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

    <Route path='/favorites' exact>
       <Favorites />
    </Route>
    </div>
    </AppContext.Provider>
  );


export default App;


