import React, { useReducer } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Radio, RadioGroup, Select } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      {/* // code for amazon logo start_________________________________________________________________________ */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
        />
      </Link>

      {/* // code for location selection start________________________________________________________________________ */}
      <div className="header__location">
        <button className="header__location__button">
          <div>Hello</div>
          <div>
            {" "}
            <LocationOnIcon></LocationOnIcon>Select Your Address
          </div>
        </button>
      </div>
      {/* // code for dropdown start_______________________________________________________________________________*/}
      <div className="header__dropdown">
        <select className="header__dropdown__select">
          <option value="1">All</option>
          <option value="2">men</option>
          <option value="3">women</option>
        </select>
      </div>
      {/* // code for header search bar start_________________________________________________________________________ */}
      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>

      {/* //code for header language selection start_______________________________________________________________________________ */}

      {/* // code for header navigation start_____________________________________________________________________________  */}
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>

      {/* // code for header shopping basket start ________________________________________________________ */}
      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingCartIcon className="icon__size"></ShoppingCartIcon>
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
};
export default Header;
