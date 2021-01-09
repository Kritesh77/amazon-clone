import React, { Component } from "react";
import banner from "../banner.png";
import Product from "./Product.js";
import productList from "./productList.js";
export class Mainwrap extends Component {
  render() {
    const product = productList.map((items) => {});
    return (
      <div className="mainwrap">
        <div className="mainwrap__container">
          <img alt="banner" src={banner} className="mainwrap__banner" />
          <h1>Top Features</h1>
          <div className="product__row">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className="product__row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="product__row">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    );
  }
}

export default Mainwrap;
