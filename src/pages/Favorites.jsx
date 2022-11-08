import React from "react";
import { useContext } from "react";
import Cart from "../components/Cart";
import  AppContext  from "../contex";

function Favorites() {
  const {favorites, onAddToFavorite} = useContext(AppContext);
  

    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>My favorites</h1>
       </div>
       <div className="d-flex flex-wrap">
       {favorites.map((item, index) => (
          <Cart 
          key={index}
          favorited={true}
          onFavorite={onAddToFavorite}
          {... item}
        />
        ))}
       </div>
      </div>
    );
}

export default Favorites;