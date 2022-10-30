import Cart from './components/Cart';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

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
      useEffect(() => {
     axios({
      method: 'get',
      url:('https://635c1c82fc2595be2640e417.mockapi.io/items')
     })
     .then((response) => {
      setICartItems(response.data);
     });
     axios({
      method: 'get',
      url: ('https://635c1c82fc2595be2640e417.mockapi.io/cart')
     })
     .then((response) => {
      setItems(response.data);
     }).catch(handelError)
    },[])


    const onAddToCart = (obj) => {
     axios({
      method: 'post',
      url: ('https://635c1c82fc2595be2640e417.mockapi.io/cart', obj)
     })
      setCartItems(...cartItems, obj)
    }

    const onRemoveItem = (id) => {
      // console.log(id)
      axios({
        method: 'delete',
        url: (`https://635c1c82fc2595be2640e417.mockapi.io/cart/${id}`)
      });
       setCartItems((prev) => prev.filter(item.id !== id))
    }

    const onAddToFavorite = (obj) => {
      axios({
        method: 'post',
        url:('https://635c1c82fc2595be2640e417.mockapi.io/cart/', obj)
      });
      setFavorites((prev) => [...prev, obj])
    }

    const onChangeSerchInput = (event) => {
      console.log(event.target.value);
      setSeachValue(event.target.value);
    };

  return (
    <div className="wrapper clear">
     {cartOpened ? <Drawer items={cartItems}  onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem} /> : null}
    <Route path='/'>
        <Header onClickCart={() => setCartOpened(true)} />
    </Route>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>{serchValue ? `Search: "${serchValue}"` : "Our Sneakers"}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search"/>
          {serchValue && (
           <img onclick={() => setSeachValue("")}
           className="clear cu-p" src="/img/btn-remove.svg" alt="Clear"/>)}
          <input onChange={onChangeSearchValue} value={serchValue} placeholder="Search..."/>
        </div>
       </div>
       <div className="d-flex flex-wrap">
        
        {items.filter((item) => item.title.toLowerCase().includes(serchValue.toLowerCase()))
        .map((item, index) => (
          <Cart 
          key={index}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          onClickFavorite={onAddToFavorite(obj)}
          onClickAdd={(obj) => console.log(obj)}
        />
        ))}
       </div>
      </div>
    </div>
  );
}

export default App;
