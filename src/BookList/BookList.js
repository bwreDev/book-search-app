import React, { Component } from 'react';
import './BookList.css';
import ListItem from '../ListItem/ListItem';

export default class BookList extends Component {
    
    render() {
        return (
            <div className='book-list'>
                {this.props.books.map(book => (<ListItem 
                book={book} key={book.id} />))}
                
            </div>
        )
    }
}