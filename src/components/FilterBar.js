import React, { Component } from 'react';
import './FilterBar.css'

class FilterBar extends Component {
    render() {
        const printType = this.props.printtype.map(
            (printtype, i) => <option value={printtype.type} key={i}>{printtype.type}</option>
          );
        const bookType = this.props.booktype.map(
            (booktype, i) => <option value={booktype.type} key={i}>{booktype.type}</option>
        );
        return (
            <fieldset>
                <form className='filterForm'>
                <label htmlFor="printtype">Print Type:</label>
                <select
                    id="printtype"
                    name="printtype"
                >
                    <option value='All'>All</option>
                    {printType}
                </select>
                <label htmlFor="booktype">Book Type:</label>
                <select
                    id="booktype"
                    name="booktype"
                >
                    <option value='No Filter'>No Filter</option>
                    {bookType}
                </select>
                </form>
            </fieldset>
           

        );
    }

}

export default FilterBar;