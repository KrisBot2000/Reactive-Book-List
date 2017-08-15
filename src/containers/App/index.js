import React, { Component } from 'react';
import './styles.css';
import {getBooksFromFakeXHR, addBookToFakeXHR} from '../../lib/books.db.js';
import BookListAppTitle from '../../components/BookListAppTitle.js';
//import Book from '../../components/Book.js';
import BookList from '../BookList';


class App extends Component {

  constructor(){
    super();

    this.state = {
      title: 'My React Book List',
      books: []
    };

  };

  componentDidMount() {
    getBooksFromFakeXHR()
    .then(books => {
      this.setState({
        books : books
      });
    });
  }

  render() {
    return (
      <div className="App">
        <BookListAppTitle title={ this.state.title } />

        {/*<BookList books={ this.state.books } searchFilter={ this.state.searchFilter }/>*/}
        <BookList books={ this.state.books }/>
      </div>
    );
  }
}

export default App;
