import React, { Component } from 'react';
import ResultItem from './ResultItem';

class ResultList extends Component {
    render() {
        return (
            <>
                <ResultItem  items={this.props.items}/>
            </>
        );
    }
} 

export default ResultList;