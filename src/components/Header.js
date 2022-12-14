import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();
  // console.log(props)
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img
            width={40}
            height={40}
            src={`${process.env.PUBLIC_URL}/img/logo.png`}
            alt="Logotype"
          />
          <div>
            <h3 className="text-uppercase">Project-Store</h3>
            <p className="opacity-5">Best sneakers market</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img
            width={18}
            height={18}
            src={`${process.env.PUBLIC_URL}/img/cart.svg`}
            alt="Cart"
          />
          <span>{totalPrice} $</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img
              width={18}
              height={18}
              src={`${process.env.PUBLIC_URL}/img/heart.svg`}
              alt="Favorite"
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img
              width={18}
              height={18}
              src={`${process.env.PUBLIC_URL}/img/user.svg`}
              alt="User"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
