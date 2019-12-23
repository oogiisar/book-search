import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.handleSearch(e.target.search.value)
      }
    render() {
        return (
            <fieldset>
                <form className='SearchForm' onSubmit={this.onSubmitForm}>
                    <label htmlFor='search'>Search: </label>
                    <input
                        type='text'
                        name='search'
                        id='search'
                        placeholder='Book Name' 
                        
                    />
                    <button type='submit'>Search</button>
                </form>
            </fieldset>
        );
    }
}

export default SearchBar;