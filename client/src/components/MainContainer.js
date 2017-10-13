/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import GridView from "./grid/GridView";
import ItemView from './item/ItemView';
import Home from './Home';
import { Route, Switch, Redirect } from 'react-router-dom';


class MainContainer extends React.Component {
	render() {
	  return (
	    <div className="main-container">
	    	<Switch>
	    		<Route exact path='/' component={Home} />
	    		<Route path='/shop/:category' component={GridView}/>
	    		<Route path='/item/:id' component={ItemView} />
	    		<Redirect from='*' to='/404' />
	    	</Switch>
	    </div>
	  );
	}
}

export default MainContainer;