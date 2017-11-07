/* eslint-disable no-unused-vars */
import React, { Component } from "react";
let $ = require('jquery');
import GridView from "./GridView";

class SearchResultGrid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {items: [], searchTerm: props.match.params.term};
		this.loadData = this.loadData.bind(this);
	}

	render() {
		return <GridView data={this.state.items} />;
	}

	componentDidMount() {
		this.loadData(this.state.searchTerm);
	}

	componentDidUpdate() {
		if (this.state.searchTerm !== this.props.match.params.term) {
			let term  = this.props.match.params.term;
			this.setState({searchTerm: term});
			this.loadData(term);
		}
	}

	loadData(term) {
		$.ajax('/api/search/' + term).done(function(data) {
			console.log(data);
			this.setState({items: data});
		}.bind(this));
		//TODO - Handle errors
	}
}

export default SearchResultGrid;
