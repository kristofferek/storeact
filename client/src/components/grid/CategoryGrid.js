/* eslint-disable no-unused-vars */
import React, { Component } from "react";
let $ = require('jquery');
import GridView from "./GridView";

class CategoryGrid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {items: [], category: props.match.params.category};
		this.loadData = this.loadData.bind(this);
	}

	render() {
		return <GridView data={this.state.items} />;
	}

	componentDidMount() {
		this.loadData(this.state.category);
	}

	componentDidUpdate() {
		if (this.state.category !== this.props.match.params.category) {
			let cat  = this.props.match.params.category;
			this.setState({category: cat});
			this.loadData(cat);
		}
	}

	loadData(category) {
		$.ajax('/api/items/' + category).done(function(data) {
			console.log(data);
			this.setState({items: data});
		}.bind(this));
		//TODO - Handle errors
	}
}

export default CategoryGrid;
