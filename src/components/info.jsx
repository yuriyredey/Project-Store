import React, { useContext } from 'react'
import AppContext from '../contex';

const info = ({title, description}) => {
    const {setCartOpened} = useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
    <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
    <h3>Cart is empty</h3>
    <p className="opacity-6">{description}</p>
    <button onClick={onClick} className="greenButton">
      <img scr= "/img/arrow.svg" alt="Arrow" /> Go back
    </button>
  </div> 
  )
}

export default info;