import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";

import img1 from "../images/home1.jpg";
import img2 from "../images/products.jpg";
import img3 from "../images/contact.jpg";
import img4 from "../images/register.jpg";

const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img1} alt="Suits" />} />
        <Route
          path="/products"
          render={() => <img src={img2} alt="clothes in the store" />}
        />
        <Route
          path="/contact"
          render={() => <img src={img3} alt="letter boxes" />}
        />
        <Route
          path="/login"
          render={() => <img src={img4} alt="login and password" />}
        />

        <Route render={() => <img src={img2} alt="clothes in the store" />} />
      </Switch>
    </>
  );
};

export default Header;
