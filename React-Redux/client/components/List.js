import React from 'react';
import PropTypes from 'prop-types';

const List = props => (
    <ul>
        { props.items.map( (item, index) => <Todo key={index} item={item} index={index}></Todo> ) }
    </ul>
)

const Todo = props => (
 <li key={props.item}>{props.item}</li>
)

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default List