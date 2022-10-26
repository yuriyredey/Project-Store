function Drawer() {
    return (
        <div style={{display: "none"}} className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">
            Cart <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove"/></h2>
      </div>
        <div className="items">
        <div className="cartItem d-flex align-center">
           <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)' }} 
           className="cartItemImg"></div>
          <div className="mr-20 flex">
            <p className="mb-5">Nike Air Max 270</p>
            <b>179.99$</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
        </div>

        <div className="cartItem d-flex align-center">
           <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)' }} 
           className="cartItemImg"></div>
          <div className="mr-20 flex">
            <p className="mb-5">Nike Air Max 270</p>
            <b>179.99$</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
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
        </div>
        </div>
        </div>
        
    )
}

export default Drawer;

