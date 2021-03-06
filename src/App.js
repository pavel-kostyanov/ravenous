import React, { Component } from 'react';
import logo from './logo.svg';
import BusinessList from './components/BusinessList/BusinessList.js'
import SearchBar from './components/SearchBar/SearchBar.js'
import Yelp from './util/Yelp.js';
import './App.css';




class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
Yelp.search(term, location, sortBy).then(value => {
  console.log(value);
  this.setState({businesses: value}
  )});
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>

      {<SearchBar searchYelp={this.searchYelp} />}
       {<BusinessList businesses={this.state.businesses}/>}

      </div>
    );
  }
}

export default App;
