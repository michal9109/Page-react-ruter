import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductListPage.css";

const products = ["Suits", "Shirts", "Shoes", "T-shirts", "Trousers"];

const ProductListPage = () => {
  const list = products.map((product) => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));

  return (
    <div className="products">
      <h3>COLECTION</h3>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default ProductListPage;
