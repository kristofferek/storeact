/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import GridItem from "./GridItem";

class GridView extends React.Component {

	render() {
		const gridItems = this.props.data.map((gridItem) =>
			<GridItem key={gridItem._id} item={gridItem}/>
			);

		return (
			<div id="grid-view" className="four column doubling stackable ui grid">
				{gridItems}
			</div>
			);
	}
}

export default GridView;
