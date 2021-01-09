import React, { Component } from "react";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
export class Product extends Component {
  render() {
    return (
      <div className="product">
        <img
          src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-291908,resizemode-1,msid-73202226/magazines/panache/apple-macbook-pro-review-a-heavy-duty-performer.jpg"
          alt=""
        />
        <div className="product__info">
          <p className="product__featureText">Featured from top sellers</p>
          <p class="product__title">Apple MacBook Pro Max 2020, Light Grey</p>

          <div className="product__rating">
            <StarIcon className="product_ratingStar" />
            <StarIcon className="product_ratingStar" />
            <StarIcon className="product_ratingStar" />
            <StarIcon className="product_ratingStar" />
            <StarBorderIcon className="product_ratingStar" />
            <span class="product__ratingNumber">1,799</span>
          </div>
          <p className="product__price">
            <small>$</small>
            <strong>1,899</strong>
          </p>
          <Link to="./checkout">
            <button>Add to cart</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Product;
