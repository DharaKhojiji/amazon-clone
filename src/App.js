import logo from "./logo.svg";
import "./App.css";
import Header from "./COMPONENTS/Header";
import Home from "./COMPONENTS/Home";
import Checkout from "./COMPONENTS/Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./COMPONENTS/Login";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>",authUser);

      if(authUser){

      }
      else{
        
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
