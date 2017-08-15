//needed in every dumb component -- additional {Component} needed in containers ('smart' components)
import React from 'react';


const BookListAppTitle = ({ title }) => <h1>{ title }</h1>;

//ES6 style but can desconstruct objects and use in one line
// const BookListAppTitle = props => {
//   return <h1>{ props.title }</h1>;
// }

//THIS IS ES5 style.  Equivalent ES6 is above!
// function BookListAppTitle (props){
//   return <h1>{ props.title }</h1>;
//}

export default BookListAppTitle;