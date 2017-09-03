import React from 'react';
import ReactDOM from 'react';

const List = props => (
    <ul>
        { props.map( (item, index) => <li key={index}>{item}</li>) }
    </ul>
)

export default List
