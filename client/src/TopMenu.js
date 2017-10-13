/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class TopMenu extends React.Component {
	render() {
	  return (
	    <div className="ui top secondary fixed menu large">
	      <a className="header item">
	        <h2>STOREACT</h2>
	      </a>
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