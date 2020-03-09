import React, { Component } from 'react';
import './FilterBooks.css'

export default class FilterBooks extends Component {
    render() {
        return (
            <div className='filter-books'>
                <form>
                    <fieldset>
                        <label>Print Type:</label>
                        <select id='print-type'>
                            <option value='All'>All</option>
                            <option value='Book'>Book</option>
                            <option value='Magazine'>Magazine</option>
                        </select>
                    
                        <label>Book Type:</label>
                        <select id='book-type'>
                            <option value='No Filter'>No Filter</option>
                            <option value='Free'>Free</option>
                            <option value='Paid'>Paid</option>
                        </select>
                    </fieldset>
                </form>
            </div>
        )
    }
}