import React from 'react';
import ReactDOM from 'react-dom';
import { TicTacToeContainer as App } from 'components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from 'store/reducers'

export const ACTION_CHANGE_FIRST = 'ACTION_CHANGE_FIRST';
export const ACTION_CHANGE_SECOND = 'ACTION_CHANGE_SECOND';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
	<App />
</Provider>, document.getElementById('root'));

