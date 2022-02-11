import logo from "./logo.svg";
import "./App.css";
import Header from "./COMPONENTS/Header";
import Home from "./COMPONENTS/Home";
import Checkout from "./COMPONENTS/Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./COMPONENTS/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./COMPONENTS/StateProvider";
import Payment from "./COMPONENTS/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51KRBPoSJE7JFLGpT3x9oRGhpUKLROilV18vyQfudBWbOzS1i1bHfftWTyF2aSkUDAb9rTF9hbzVLX8OrVzX3nOW900diVjsAI9"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);

      if (authUser) {
        // the use is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        // the use is logged out
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        {/* <Header></Header> */}
        <Switch>
          <Route path="/login">
            <Header></Header>
            <Login></Login>
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path="/payment">
            <Header></Header>
            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
