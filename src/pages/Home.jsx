import { useContext } from 'react';
import Cart from '../components/Cart';
import AppContext from '../contex';

function Home({
  items, 
  cartItems, 
  serchValue,
   setSeachValue, 
   onChangeSearchInput, 
   onAddToFavorite, 
   onAddToCart, 
   isLoading
  }) {
    const {isItemAdded} = useContext(AppContext)

  const renderItems = () => {
    return(isLoading ? [...Array(10)] : items.filter((item) => item.title.toLowerCase().includes(serchValue.toLowerCase()))) 
        .map((item, index) => (
          <Cart 
          key={index}
          onClickFavorite={(obj) => onAddToFavorite(obj)}
          onClickAdd={(obj) => onAddToCart(obj)}
          added={isItemAdded(item.id)}
          loading={false}
          {...item}
        />
        ));
  };

    return (
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
        {renderItems()}
       </div>
      </div>
    )
}

export default Home;