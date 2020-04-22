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

const actionChangeFirst = {
	type: ACTION_CHANGE_FIRST,
	payload: 'FIRST'
};

const actionChangeSecond = {
	type: ACTION_CHANGE_SECOND,
	payload: 'SECOND'
};

const rootReducer = (state = initialState, action) => {
	return state;
}

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

