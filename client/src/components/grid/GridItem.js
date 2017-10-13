/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class GridItem extends React.Component {
      render() {
        return (
          <NavLink className="column" to={"/item/" + this.props.item._id}>
        		<div className="ui center aligned header">
        			<img className="fluid image ui" alt="img" src={this.props.item.imgUrl} />
        			<div className="content item-brand font-special">
        				{this.props.item.brand.toUpperCase()}
        			</div>
        			<div className="item-name">
        				{this.props.item.name}
        			</div>
        			<div className="item-price">
        				{this.props.item.price} kr
        			</div>
        		</div>
          </NavLink>  
        );
      }
}

export default GridItem;