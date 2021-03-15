import { UsersActionTypes } from './users.types';

const INITIAL_STATE = {
	users: [],
	isFetching: false,
	errorUsers: '',
};

export const usersReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process: START                                                  */
		/* ================================================================ */
		case UsersActionTypes.FETCH_USERS_COLLECTION_START:
			return {
				...state,
				isFetching: true,
				errorUsers: '',
			};
		/* ================================================================ */
		/*  Process: SUCCESS                                                */
		/* ================================================================ */
		case UsersActionTypes.FETCH_USERS_COLLECTION_SUCCESS:
			return {
				...state,
				isFetching: false,
				users: action.payload,
				errorUsers: '',
			};
		/* ================================================================ */
		/*  Process: FAILURE                                                */
		/* ================================================================ */
		case UsersActionTypes.FETCH_USERS_COLLECTION_FAILURE:
			return {
				...state,
				isFetching: false,
				errorUsers: action.payload,
			};
		/* ================================================================ */
		/*  Process: CLEAR                                                  */
		/* ================================================================ */
		case UsersActionTypes.CLEAR_USERS_COLLECTION:
			return {
				...state,
				isFetching: false,
				users: [],
				errorUsers: '',
			};

		default:
			return state;
	}
};
