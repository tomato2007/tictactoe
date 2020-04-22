import React from 'react';
import ReactDOM from 'react-dom';
import {WrappedApp as App} from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState = {
	first: 'first',
	second: 'second'
};

const ACTION_CHANGE_FIRST = 'ACTION_CHANGE_FIRST';
const ACTION_CHANGE_SECOND = 'ACTION_CHANGE_SECOND';

const changeChangeFirst = (newFirst) => {
	return {
		type: ACTION_CHANGE_FIRST,
		payload: newFirst
	}
};

const actionChangeSecond = (newSecond) => {
	return {
		type: ACTION_CHANGE_SECOND,
		payload: newSecond
	}
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_CHANGE_FIRST:
			return {
				...state,
				first: action.payload
			};
		case ACTION_CHANGE_SECOND:
			return {
				...state,
				second: action.payload
			};
		default:
			return state
	}
	return state;
}

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

