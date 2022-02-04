import { Title } from "@material-ui/icons";
import React from "react";
import "./CheckOutProduct.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useStateValue } from "./StateProvider";

const CheckOutProduct = (props) => {
    const[{basket} , dispatch]=useStateValue();
    const removeFromBasket=()=>{
        //remove the items from the basekt
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:props.id
        })
    }
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__image" src={props.image}></img>
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{props.title}</p>
        <p className="checkoutproduct__price">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutproduct__rating">
          {Array(props.rating)
            .fill()
            .map((_,i) => (
              <p key={i}>
                <StarBorderIcon></StarBorderIcon>
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};
export default CheckOutProduct;
