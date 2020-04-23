import { ACTION_CHANGE_FIRST, ACTION_CHANGE_SECOND } from 'index';


export const actionChangeFirst = (newFirst) => {
	return {
		type: ACTION_CHANGE_FIRST,
		payload: newFirst
	}
};

export const actionChangeSecond = (newSecond) => {
	return {
		type: ACTION_CHANGE_SECOND,
		payload: newSecond
	}
};