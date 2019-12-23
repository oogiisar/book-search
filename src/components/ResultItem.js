import React, { Component } from 'react';
import './ResultItem.css';

class ResultItem extends Component {
        static defaultProps = 
        { items: [] };
    render() {
        const books = this.props.items.map((book, i) => 
            <li key={i}>
                <h1>{book.volumeInfo.title}</h1>
                <div className='bookimage'>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="Books picture" />
                </div>
                <div className='bookdata'>
                    <p>{book.volumeInfo.authors}</p>
                    <p>{book.saleInfo.saleability !== 'NOT_FOR_SALE' ? "$" + book.saleInfo.listPrice.amount : "Not available for sale"}</p>
                    <p>{book.volumeInfo.description}</p>
                </div>
            </li>
        );
        return (
            <ul>
                {books}
            </ul>
        );
    }
}


export default ResultItem;