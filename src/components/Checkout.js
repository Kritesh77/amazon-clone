import React from "react";

export default function checkout() {
  return (
    <div>
      <div className="checkout__container">
        <div className="checkout_items">
          <h1>Shopping Cart</h1>
          <h4 className="checkout__priceSpan ">Price</h4>

          <div className="checkout__info flex">
            <div className="checkout__img">
              <img
                src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-291908,resizemode-1,msid-73202226/magazines/panache/apple-macbook-pro-review-a-heavy-duty-performer.jpg"
                alt=""
              />
            </div>
            <div className="checkout__desc">
              <p>
                New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage) - Space
                Gray
              </p>
              <span>In stock on January 12, 2021.</span>
              <select name="Qty:" id="quantity">
                <option value="1">Qty:1</option>
                <option value="2">Qty:2</option>
                <option value="3">Qty:3</option>
                <option value="4">Qty:4</option>
                <option value="5">Qty:5</option>
              </select>
            </div>
            <div className="checkout__price">
              <strong>$999</strong>
            </div>
          </div>
          <div className="checkout__subtotal">
            <h2>
              Subtotal(items):
              <strong className="checkout__subtotalPrice">$999</strong>
            </h2>
          </div>
        </div>
        <div className="checkout__total">
          <h2 className="fw-400">
            Subtotal(1 items):
            <strong className="checkout__subtotalPrice">$1,999</strong>
          </h2>
          <button className="checkout__btn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}
