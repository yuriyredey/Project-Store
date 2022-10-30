function Drawer({onClose,onRemove, items = []}) {
    return (
        <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">
            Cart <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove"/></h2>

            {
              items.length > 0 ?  (
                <div><div className="items">
                {
                items.map((obj) => (
                  <div className="cartItem d-flex align-center">
             <div style={{backgroundImage: `url(${obj.imageUrl})` }} 
             className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price}$</b>
            </div>
            <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Close"/>
          </div>
                ))}
              </div> 
                 <div className="cartTotalBlock">
                 <ul>
                   <li>
                     <span>Total:</span>
                     <div></div>
                     <b> 469.99$</b>
                   </li>
                   <li>
                     <span>Tax 8%:</span>
                     <div></div>
                     <b>37,59$</b>
                   </li>
                 </ul>
                 <button className="greenButton">
                   Make order <img src="/img/arrow.svg" alt="Arrow"/></button>
                 </div></div>
              )
            : (
              <div class="cartEmpty d-flex align-center justify-center flex-column flex">
              <img class="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
              <h3>Cart is empty</h3>
              <p class="opacity-6">Add at list one product, to make a order</p>
              <button onClick={onClose} class="greenButton">
                <img scr= "/img/arrow.svg" alt="Arrow" /> Go back
              </button>
            </div>
            )}
      </div>
        </div>
    )
}
export default Drawer;

