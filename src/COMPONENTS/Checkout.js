import React from "react";
import "./Checkout.css";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        ></img>

        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              image={item.image}
            ></CheckOutProduct>
          ))}
          {/* <BasketItem></BasketItem> */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal></Subtotal>
        {/* <h2>Sub total will go here</h2> */}
        {/* <Basketitem></Basketitem> */}
      </div>
    </div>
  );
};
export default Checkout;
