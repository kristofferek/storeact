/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from 'react-router-dom';

class TopMenu extends React.Component {
	render() {
	  return (
	    <div className="ui top secondary fixed menu large topmenu">
	      <Link className="header item" to="/">
	        <h1 className="font-special brand">STOREACT</h1>
	      </Link>
	      <div className="right menu">
	        <div className="right item">
	          <div className="ui icon input">
	            <input type="text" placeholder="Search..."/>
	            <i className="search link icon"></i>
	          </div>
	        </div>
	        <div className="item">
	        	<i className="shop icon black large"></i>
	        </div>
	      </div>
	    </div>
	  );
	}
}

export default TopMenu;