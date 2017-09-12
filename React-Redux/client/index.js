import React from 'react';
import ReactDOM from 'react-dom';
import todoApp from './reducers';
import App from './components/App';

let store = createStore(todoApp);

ReactDOM.render(<App />, document.getElementById('root'));