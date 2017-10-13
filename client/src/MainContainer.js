/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import GridView from "./grid/GridView";
import ItemView from './item/ItemView';
import { Route, Switch } from 'react-router-dom';
import PropsRoute from './utils/PropsRoute';


class MainContainer extends React.Component {
	render() {
	  return (
	    <div className="main-container">
	    	<Switch>
	    		<Route path='/shop/:category' component={GridView}/>
	    		<Route path='/item/:id' component={ItemView} />
	    	</Switch>
	    </div>
	  );
	}
}

export default MainContainer;