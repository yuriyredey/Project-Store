import React from 'react';
import Info from '../info';
import axios from 'axios';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import styles from './Drawer.module.scss';


const deley = () => new Promise((resolve) => setTimeout(resolve, 1000));


function Drawer({onClose,onRemove, items = [], opened}) {
  const { cartItems, setCartItems, totalPrice} = useCart();
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
 

  const onClickOrder = async () => {
   try {
    setIsLoading(true);
    const {data} = await axios.post('https://635c1c82fc2595be2640e417.mockapi.io/orders/', {
      items: cartItems,
    });
    setOrderId(data.id);
    setIsOrderComplete(true);
    setCartItems([]);

   for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    await axios.delete('https://635c1c82fc2595be2640e417.mockapi.io/cart/' + item.id);
    await deley()
   }
   } catch (error) {
    alert('Failed...')
   }
   setIsLoading(false);
  }
    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
        <div className={styles.drawer}> 
          <h2 className="mb-30 d-flex justify-between">
            Cart <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close"/></h2>

            {items.length > 0 ?  (
                <div className="d-flex flex-column">
                  <div className="items flex">
                {
                items.map((obj) => (
                  <div key={obj.id} className="cartItem d-flex align-center mb-20">
             <div style={{backgroundImage: `url(${obj.imageUrl})` }} 
             className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price} $</b>
            </div>
            <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
          </div>
                ))}
              </div> 
                 <div className="cartTotalBlock">
                 <ul>
                   <li>
                     <span>Total:</span>
                     <div></div>
                     <b> {totalPrice} $</b>
                   </li>
                   <li>
                     <span>Tax 8%:</span>
                     <div></div>
                     <b>{(totalPrice / 100) * 8} $</b>
                   </li>
                 </ul>
                 <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                   Make order <img src="/img/arrow.svg" alt="Arrow"/></button>
                 </div></div>
              ) : (
              <Info 
              title={isOrderComplete ? "Order Completed!" : "Cart is empty"}
              description={isOrderComplete ? `Your oreder #${orderId}`  : "Add at list one product, to make a order"}
              image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empy-cart.jpg"}/>
            )}
          </div>
        </div>
    );
}
export default Drawer;

