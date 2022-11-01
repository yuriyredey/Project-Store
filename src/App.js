import Header from './components/Header';
import Drawer from './components/Drawer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

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
      setItems(response.data);
     });
     axios({
      method: 'get',
      url: ('https://635c1c82fc2595be2640e417.mockapi.io/cart')
     })
     .then((response) => {
      setCartItems(response.data);
     });
     axios({
      method: 'get',
      url: ('https://635c1c82fc2595be2640e417.mockapi.io/favorites')
     })
     .then((response) =>  {
      setFavorites(response.data);
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

    const onAddToFavorite =  async (obj) => {
      // console.log(obj)
      try {
        if(favorites.find((favObj) => favObj.id === id)) {
          axios({
            method: 'delete',
            url:(`https://635c1c82fc2595be2640e417.mockapi.io/favorites/${obj.id}`)
          })
        } else {
          const {data} = await axios({
            method: 'post',
            url:('https://635c1c82fc2595be2640e417.mockapi.io/favorites/', obj)
          })
          setFavorites((prev) => [...prev, data])
     }  
      } catch (error) {
        alert('Adding to favorites is failing');
      }
      axios({
        method: 'post',
        url:('https://635c1c82fc2595be2640e417.mockapi.io/cart/', obj)
      });
      setFavorites((prev) => [...prev, obj])
    };

    const onChangeSerchInput = (event) => {
      console.log(event.target.value);
      setSeachValue(event.target.value);
    };

  return (
    <div className="wrapper clear">
     {cartOpened ? <Drawer items={cartItems}  onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem} /> : null}
     <Header onClickCart={() => setCartOpened(true)} />
    <Route path='/' exact>
        <Home 
        items={items} 
        serchValue={serchValue} 
        setSeachValue={setSeachValue} 
        onChangeSerchInput={onChangeSerchInput}
        onAddToFavorite={onAddToFavorite}
        onAddToCart={onAddToCart}
        />
    </Route>

    <Route path='/favorites' exact>
       <Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>
    </Route>
    </div>
  );
}

export default App;
