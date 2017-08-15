import React, { Component } from 'react';
import './styles.css';
import {getBooksFromFakeXHR, addBookToFakeXHR} from '../../lib/books.db.js';
import BookListAppTitle from '../../components/BookListAppTitle.js';
import BookList from '../BookList';
import NewBookForm from '../NewBookForm';
import BookFilterInput from '../../components/BookFilterInput';


class App extends Component {

  constructor(){
    super();

    this.state = {
      title: 'My React Book List',
      books: [],
      searchFilter : ''
    };

    this.parentAddBook = this.parentAddBook.bind(this);
    this.setSearchFilter = this.setSearchFilter.bind(this);

  };

  setSearchFilter( event ){
    console.log(event.target.value);
    const searchFilter = event.target.value;
    this.setState({ searchFilter });
  }

  parentAddBook( newBook ) {
    addBookToFakeXHR(newBook)
    .then(books => {
      this.setState({
        books : books
      });
    });
  }


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
        <BookFilterInput setSearchFilter={ this.setSearchFilter }/>
        <BookList books={ this.state.books } searchFilter={ this.state.searchFilter }/>
        <NewBookForm childAddBook={this.parentAddBook} />
      </div>
    );
  }
}

export default App;
