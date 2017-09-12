
import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions';
import { combineReducers } from 'redux';

const initialState = {
    visibility: VisibilityFilters.SHOW_ALL,
    todos: ['rest']
}

function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todo: [...state, { text: action.text, completed: false }]
            });
        break;
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.map( (todo, index) => {
                return Object.assign({}, todo, {
                    completed: !todo.completed
                });
                })
            });
        break;
        default:
            return state; 

    }
}

function visibilityFilters(state = VisibilityFilters.SHOW_ALL, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        break;
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilters,
    todos
});

export default todoApp;