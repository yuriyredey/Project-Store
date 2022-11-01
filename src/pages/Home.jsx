import Cart from '../components/Cart';

function Home({items, serchValue, setSeachValue, onChangeSearchInput, onAddToFavorite, onAddToCart}) {
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
    )
}

export default Home;