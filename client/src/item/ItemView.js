/* eslint-disable no-unused-vars */
import React, { Component } from "react";
let $ = require('jquery');

class ItemView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {id: this.props.match.params.id, item: []};
		this.loadData = this.loadData.bind(this);
	}

	render() {
		return (
			<div className="">
				{this.state.item.name}
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
}

export default ItemView;