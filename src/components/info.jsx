import React, { useContext } from 'react';
import AppContext from '../contex';

const Info = ({title, image, description}) => {
    const {setCartOpened} = useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
    <img className="mb-20" width="120px" src={image} alt="Empty" />
    <h3>{title}</h3>
    <p className="opacity-6">{description}</p>
    <button onClick={() => setCartOpened(false)} className="greenButton">
      <img scr= "/img/arrow.svg" alt="Arrow" /> Go back
    </button>
  </div> 
  );
};

export default Info;