import React, { useState } from 'react';
import styles from './Cart.module.scss';
console.log(styles)

function Cart({onClickFavorite, onClickAdd, title, imageUrl, price}) {
  console.log(props)

  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handelClick = () => {
    onClickAdd(title, price, imageUrl)
    setIsAdded(!isAdded)
  };
  const onClickFavorite = () => {
    onClickFavorite(title, price, imageUrl);
    setIsFavorite(!isFavorite);
  }
  console.log(isAdded)
    return (
        <div className={styles.cart}>
       <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked"/>
       </div>
          <img width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
          <h5>{props.title}</h5>
          <div className="d-flex justify-betwen align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>{props.price}$</b>
            </div>
            <button className="button" onClick={props.onClickAdd}>
              <img className={styles.plus} 
              onClick={handelClick} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
              alt="Plus" />
            </button>
          </div>
        </div>
    )
}

export default Cart;