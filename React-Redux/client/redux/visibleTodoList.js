
import _ from 'ramda';
import connect from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/todo-list';


const getVisibileTodos = (todos, filter) =>
    _.cond([
        [_.equals('SHOW_ALL'), _.always(todos)],
        [_.equals('SHOW_COMPLETED'), _.always(filter(t => t.completed, todos))],
        [_.equals('SHOW_ACTIVE'), _.always(filter(t => !t.completed, todos))]
    ])(filter)

const mapStatetoProps = state => _.assoc('todos', getVisibleTodos(state.todos, state.visibilityFilter), {});

const mapDispatchToProps = dispatch => _.assoc('onTodoclick', (id) => dispatch(toggletodo(id)), {});

const VisibleTodoList = _.curry(connect(mapStateToProps, mapDispatchToProps)(TodoList))

export default VisibleTodoList;