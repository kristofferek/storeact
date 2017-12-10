import React, { Component } from "react";
import TopMenu from "./components/navs/TopMenu";
import SideMenu from "./components/navs/SideMenu";
import MainContainer from "./components/MainContainer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashHistory
} from 'react-router-dom';

class NoMatch extends Component {

  render() {
    return (<h1 style={{margin: 2 + 'em'}} >404 - Not found</h1>);
  }
}

class AppWrapper extends Component {

  render() {
    return (
      <div>
        <TopMenu />
        <SideMenu />
        <MainContainer />
      </div>
      );
  }

}

class App extends Component {

  render() {
    return (
      <div>
      	<Router history={HashHistory}>
          <Switch>
            <Route path="/404" component={NoMatch} />
            <Route path="/" component={AppWrapper} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
