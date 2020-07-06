import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = ({ match }) => {
  return (
    <>
      <Product id={match.params.id} />
      <Link to="/products">Back</Link>
    </>
  );
};

export default ProductPage;
