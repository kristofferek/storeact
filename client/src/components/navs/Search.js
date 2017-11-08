/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: '', doNewSearch: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({term: event.target.value});
    this.setState({doNewSearch: true});
  }

  handleKeyPress(event) {
    if (event.charCode === 13 && this.state.term.length > 0) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({doNewSearch: true});
    }
  }

  render() {
    let redirect = null
    if (this.state.doNewSearch) {
      redirect = <Redirect to={"/search/" + this.state.term} push />
    }

    return (
      <div className="ui icon input searchbox">
        <input type="text" value={this.state.term} placeholder="Search..." onKeyPress={this.handleKeyPress} onChange={this.handleChange}/>
        <i className="search link icon" onClick={() => {this.setState({doNewSearch: true})}}/>
        {redirect}
      </div>
    );
  }
  componentDidUpdate() {
    if (this.state.doNewSearch) {
      this.setState({doNewSearch: false});
    }
	}

}

export default Search;
