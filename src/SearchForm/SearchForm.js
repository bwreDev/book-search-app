import React, { Component } from 'react';
import './SearchForm.css';
import FilterBooks from '../FilterBooks/FilterBooks';

export default class SearchForm extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        const search = e.target.search.value
        this.props.getResults(search)
    }
    render() {
        return (
            <div className='search-form'>
                <form onSubmit={this.onSubmit} >
                <input 
                    name='search'
                    placeholder='Search term'
                    defaultValue={this.props.searchTerm} />
                    <button 
                        type='submit'
                         >Submit</button>
                </form>
            <FilterBooks />
            </div>
        )
    }
}