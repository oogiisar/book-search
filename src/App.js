import React, { Component } from 'react';
import Title from './components/Title';
import Searchbar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import ResultList from './components/ResultList';
import './App.css';

const printtype = [
  {type: 'All'}
]

const booktype = [
  {type: 'No Filter'}
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
      items: []
    }
  }

  handleSearch = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    })
  }
  
  componentDidUpdate()  {
    this.fetchData();
  }

  fetchData = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?key=AIzaSyAYpiOi-yAzSH-YsuivzagJNVSoWkQDhec&maxResults=10&q=${this.state.searchTerm}`)
    .then(response => {
      //check if response is ok
      console.log('About to check for errors');
      if(!response.ok) {
        console.log('An error did occur, let\'s throw an error.');
        throw new Error('Something went wrong'); //throw an error
      }
      return response; //ok, so just continue
    })
    .then(response => response.json())
    .then(data => {
      console.log('data items')
      console.log(data.items)
      console.log('state items')
      console.log(this.state.items)
      if (JSON.stringify(data.items)  !==  JSON.stringify(this.state.items)) {
        this.setState({
          items: data.items
        });
      }
    })

    .catch(err => {
      //this catch handles the error condition
      console.log('Handling the error here.', err);
    });
  }

  render() {
    return (
      <main className='App'>
        <Title />
        <Searchbar searchTerm={this.state.searchTerm} handleSearch={this.handleSearch}/>
        <FilterBar printtype={printtype} booktype={booktype}/>
        <ResultList items={this.state.items} />
      </main>
    );
  }
}


export default App;