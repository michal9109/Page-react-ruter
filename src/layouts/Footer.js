import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const fb = <FontAwesomeIcon icon={faFacebookSquare} size="lg" />;
const insta = <FontAwesomeIcon icon={faInstagramSquare} size="lg" />;

const Footer = () => {
  return (
    <div className="footer__box">
      <h3>Follow us</h3>
      <Route
        path="/"
        render={(props) => (
          <div className="footer__social">
            {fb}
            {insta}
          </div>
        )}
      />
    </div>
  );
};

export default Footer;
