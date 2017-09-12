import React from 'react';
import PropType from 'prop-types';

const Todo = ({onClick, completed, text }) => (
    <li onClick={onClick}
        style = {{textDecoration: completed ? 'linee-through': 'none' }}> 
        {text}
    </li>
)

Todo.propTypes = { 
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.strig.isRequired
}

export default Todo;