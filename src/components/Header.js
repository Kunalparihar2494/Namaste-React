// import React from "react";
import { LOGO_URL } from "../utlis/constant";
import { useState,useEffect, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utlis/useOnlineStatus";
import UserContext from "../utlis/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utlis/appStore";

const Header = () => {
  const [btnName,setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const userData = useContext(UserContext);
  const cartItems = useSelector((store)=> store.cart.items);
  console.log('cardt-',cartItems)
    return (
      <div className="flex justify-between shadow-lg bg-amber-300">
        <div className="logo-container">
          <img
            className="w-35"
            src = {LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-5 m-4">
            <li className="px-4">Online Status - {onlineStatus ? '🟢' : '🔴'}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4">Products</li>
            <li className="px-4 font-bold"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
            <button className="login" onClick={()=>{
             btnName === 'Login' ? setBtnName('Logout'):setBtnName('Login')
            }}>{btnName}</button>
            <li className="px-4 font-bold">{userData.loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;