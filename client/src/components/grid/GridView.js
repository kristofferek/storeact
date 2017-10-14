/* eslint-disable no-unused-vars */
import React, { Component } from "react";
let $ = require('jquery');
import GridItem from "./GridItem";

class GridView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {items: [], category: props.match.params.category};
		this.loadData = this.loadData.bind(this);
	}

	render() {
		const gridItems = this.state.items.map((gridItem) =>
			<GridItem key={gridItem._id} item={gridItem}/>
			);

		return (
			<div id="grid-view" className="four column doubling stackable ui grid">
				{gridItems}
			</div>
			);
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

export default GridView;