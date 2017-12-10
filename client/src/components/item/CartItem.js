/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class CartItem extends React.Component {

  render(){
    return (
      <div className="cart-item">
        <h4>{this.props.item.name}</h4>
        <p>{this.props.sizes}</p>
      </div>
    );
  }

}

export default CartItem;
