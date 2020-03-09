import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchTerm: '',
        printType: 'All',
        bookType: 'No Filter',
        books: []
    }
}

  getResults = (search) => {
      const key = 'AIzaSyApY4U9-H940_E4rjB_Rs46BErZS8n98Dg'
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${key}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            books: data.items
          })
        })
  }

render() {
    return (
        <div className='book-search-app'>
            <h1>Book Search App</h1>
            <SearchForm 
                getResults={this.getResults}
                searchTerm={this.state.searchTerm}
                printType={this.state.printType}
                bookType={this.state.bookType} />
            <BookList
                books={this.state.books} />
        </div>
    )
}
}