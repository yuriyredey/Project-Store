import React, { useState } from 'react';
import { useContext } from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../../contex';
import styles from './Cart.module.scss';




function Cart({
  onFavorite, 
  onClickAdd, 
  title, 
  imageUrl, 
  price, 
  id, 
  favorited = false, 
  loading = false
}) {
  // console.log(favorited)
  // console.log(props)

  const [isFavorite, setIsFavorite] = useState(favorited);
  const { isItemAdded } = useContext(AppContext);
  const obj = {id, parentId: id, title, price, imageUrl};

  console.log(title, isItemAdded(id));

  const handelClick = () => {
    onClickAdd(obj)
  };
  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };
  // console.log(isAdded)
    return (
          <div className={styles.cart}>
            {loading ? ( 
            <ContentLoader
              speed={2}
              width={155}
              height={250}
              viewBox="0 0 155 265"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb">
                <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
              </ContentLoader> 
              ) : (
                 <>
          {onFavorite && ( 
          <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked"/>
       </div>
       )}
          <img width="100%" height={135} src={this.props.imageUrl} alt="Sneakers"/>
          <h5>{title}</h5>
          <div className="d-flex justify-betwen align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>{price} $</b>
            </div>
            {onClickAdd && (
              <img className={styles.plus} 
              onClick={handelClick} src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
              alt="Plus" />
            )}
          </div>
          </>
          )}
        </div>
    );
}

export default Cart;