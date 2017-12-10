/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Cart from '../../utils/Cart';
let $ = require('jquery');

function capitalizeFirstLetter(string) {
	if (string !== undefined) {
    	return string.charAt(0).toUpperCase() + string.slice(1);
	} return "";
}

class ItemView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {id: this.props.match.params.id, item: [], selectedSize: ''};
		this.loadData = this.loadData.bind(this);
		this.sizeClick = this.sizeClick.bind(this);
		this.addItemToCart = this.addItemToCart.bind(this);
		this.cart = new Cart();
	}

	render() {
		if (this.state.item.name === undefined) { return (<div></div>); }

		let shouldBeActive = (size) => { return ((size === this.state.selectedSize) ? 'active' : '');}
		const sizeBtns = this.state.item.sizes.map((size) =>
			<button className={"ui button " + shouldBeActive(size)} key={size} onClick={() => this.sizeClick(size)}>{size}</button>
			);

		const itemDetails = this.state.item.detailsList.map((text) =>
			<div key={text} className="item">{text}</div>
			);

		return (
			<div id="details">
				<div className="ui grid stackable">
					<div className="ten wide column">
						<img className="item-img ui fluid image" alt="img" src={this.state.item.imgUrl} />
					</div>
					<div className="six wide column">
						<div className="">
							<h2 className="font-special item-brand">{this.state.item.brand.toUpperCase()}</h2>
							<h1 className="item-name" >
								{this.state.item.name}
							</h1>
							<div id="price-divider" className="ui divider"></div>
							<h3 className="item-price">{this.state.item.price} kr</h3>
							<div className="ui buttons fluid size-buttons">
								{sizeBtns}
							</div>
							<button className="cart-button ui fluid labeled icon button green" onClick={this.addItemToCart}>
								<i className="shop icon"></i>
								Add to cart
							</button>
							<h4 className="ui horizontal divider header">
							  DESCRIPTION
							</h4>
							<div className="ui bulleted list">
							  {itemDetails}
							</div>
						</div>
					</div>
				</div>
			</div>
			);
	}

	componentDidMount() {
		this.loadData(this.props.match.params.id);
	}

	componentDidUpdate() {
		if (this.state.id !== this.props.match.params.id) {
			let id = this.props.match.params.category;
			this.setState({id: id});
			this.loadData(id);
		}
	}

	loadData(id) {
		$.ajax('/api/item/' + id).done(function(data) {
			console.log(data);
			this.setState({item: data});
		}.bind(this));
		//TODO - Handle errors
	}

	sizeClick(size){
		this.setState({selectedSize: size});
	}

	addItemToCart(){
		this.cart.addCartItem(this.state.item, this.state.selectedSize)
	}

}

export default ItemView;
