import React from 'react';
import Proptypes from 'propTypes';

const Todolist = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map(todo => (
            <Todo key={ todo.id} {...todo} onClick={ () => onTodoClick() }></Todo>
        ))}
    </ul>
)

TodoList.propTypes = {
    todo: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            ompleted: PropType.bool.isRequired,
            text: Proptypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList;