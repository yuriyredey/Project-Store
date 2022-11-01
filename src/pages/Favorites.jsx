import Cart from "../components/Cart";

function Favorites({items, onAddToFavorite}) {
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
       {items
        .map((item, index) => (
          <Cart 
          key={index}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          favorited={true}
          onFavorite={onAddToFavorite}
        />
        ))}
       </div>
      </div>
    )
}

export default Favorites;