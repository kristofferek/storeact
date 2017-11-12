/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Cart from '../../utils/Cart';

class CartButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {items: []};

    let cart = new Cart();
    console.log(this.updateCart);
    cart.addObserver(data => this.updateCart(data));
  }

  render() {
    return (
      <div className="item cartBtn">
        <i className="shop icon black large">{this.state.items.length}</i>
      </div>
    );
  }

  updateCart(newItems) {
    this.setState({items: newItems});
  }

}

export default CartButton;
