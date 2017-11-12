/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Search from './Search';
import CartButton from './CartButton';

class TopMenu extends React.Component {
	render() {
	  return (
	    <div className="ui top secondary fixed menu large topmenu">
	      <Link className="header item" to="/">
	        <h1 className="font-special brand">STOREACT</h1>
	      </Link>
	      <div className="right menu">
	        <div className="right item">
	          <Search/>
	        </div>
	        <CartButton />
	      </div>
	    </div>
	  );
	}
}

export default TopMenu;
