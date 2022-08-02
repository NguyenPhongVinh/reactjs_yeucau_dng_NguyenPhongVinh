export const ADD_BUDGET = 'ADD_BUDGET';
export const REMOVE_BUDGET = 'REMOVE_BUDGET';

export const addBudget = (value) => {
	return {
		type: ADD_BUDGET,
		payload: value
	}
}

export const removeBudget = (value) => {
	return {
		type: REMOVE_BUDGET,
		payload: value
	}
}