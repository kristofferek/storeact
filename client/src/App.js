import React, { Component } from "react";
import TopMenu from "./navs/TopMenu";
import SideMenu from "./navs/SideMenu";
import MainContainer from "./MainContainer";
import {
  BrowserRouter as Router,
  HashHistory
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
      	<Router history={HashHistory}>
      		<div>
		        <TopMenu />
		        <SideMenu />
		        <MainContainer />
		    </div>
	    </Router>
      </div>
    );
  }
}

export default App;
