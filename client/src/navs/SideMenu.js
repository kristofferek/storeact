/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

const categories = [ "all", "shirts", "sweaters", "t-shirts", "bottoms",
	"footwear", "jackets", "sale" ];

class SideMenu extends React.Component {
	render() {
		const listItems = categories.map((link) =>
			<NavLink key={link} className="item" activeClassName="active" to={"/shop/" + link}>
				{link.toUpperCase()}
			</NavLink>
			);
		return (
			<div className="ui vertical fixed text menu large sidemenu">
				<div className="item">
					<div className="ui medium header font-special">SHOP</div>
				</div>
				{listItems}
			</div>
		);
	}
}

export default SideMenu;