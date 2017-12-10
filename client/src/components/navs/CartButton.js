/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Cart from '../../utils/Cart';
import CartItem from '../item/CartItem'
import Modal from 'react-modal';

const modalStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '80px',
    left                       : '60%',
    right                      : '20px',
    bottom                     : 'auto',
    border                     : '2px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '0',
    outline                    : 'none',
    padding                    : '20px'

  }
};

class CartButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {cart: {itemData: [], itemSizes: [], size: 0}, modalIsOpen: false};

    let cart = new Cart();
    cart.addObserver((data) => this.updateCart(data));

    this.toggleModal = this.toggleModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);

    Modal.setAppElement('#root');
  }

  toggleModal() {
    let isOpen = this.state.modalIsOpen === true ? false : true;
    this.setState({modalIsOpen: isOpen});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  render() {
    const cartItems = this.state.cart.itemData.map((cartItem) =>
			<CartItem key={cartItem._id} item={cartItem} sizes={this.state.cart.itemSizes[cartItem._id]}/>
			);

    return (
      <div id="cart-wrapper">
        <div className="item cartBtn" onClick={this.toggleModal} >
          <i className="shop icon black large">{this.state.cart.size}</i>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.toggleModal}
          style={modalStyles}
          contentLabel="Example Modal">
        <button className="cart-button ui fluid button green">
          TO CHECKOUT
        </button>
        <div className="cart-items">
          {cartItems}
        </div>
        </Modal>
      </div>
    );
  }

  updateCart(newCart) {
    this.setState({cart: newCart});
    console.log(newCart);
  }

}

export default CartButton;
