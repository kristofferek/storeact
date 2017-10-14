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
			<div id="details" className="ui grid stackable">
				<div className="ten wide column">
					<img className="fluid image ui" alt="img" src={this.state.item.imgUrl} />
				</div>
				<div className="six wide column">
					<div className="">
						<div className="header large" >
							{this.state.item.name}
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
}

export default ItemView;