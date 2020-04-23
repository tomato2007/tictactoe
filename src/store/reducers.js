import { ACTION_CHANGE_FIRST, ACTION_CHANGE_SECOND } from 'index';

const initialState = {
	first: true,
	second: 'second'
};



export const rootReducer = (state = initialState, action) => {
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
}