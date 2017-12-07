import React, { Component } from 'react';
import logo from './logo.svg';
import BusinessList from './components/BusinessList/BusinessList.js'
import SearchBar from './components/SearchBar/SearchBar.js'
import './App.css';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const busines = [business,business,business,business,business,business];
class App extends React.Component {

  searchYelp(term, location, sortBy){
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`)
  }


  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>

      {<SearchBar searchYelp={this.searchYelp} />}

      {<BusinessList businesses={busines}/>}
      </div>
    );
  }
}

export default App;
