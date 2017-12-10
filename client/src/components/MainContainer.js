/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import CategoryGrid from "./grid/CategoryGrid";
import SearchResultGrid from './grid/SearchResultGrid';
import ItemView from './item/ItemView';
import Home from './Home';
import { Route, Switch, Redirect } from 'react-router-dom';

class MainContainer extends React.Component {
	render() {
	  return (
	    <div className="main-container">
	    	<Switch>
	    		<Route exact path='/' component={Home} />
	    		<Route path='/shop/:category' component={CategoryGrid}/>
	    		<Route path='/item/:id' component={ItemView} />
	    		<Route path='/search/:term' component={SearchResultGrid} />
					<Redirect from='/search/' to='/shop/all' />
	    		<Redirect from='*' to='/404' />
	    	</Switch>
	    </div>
	  );
	}
}

export default MainContainer;
