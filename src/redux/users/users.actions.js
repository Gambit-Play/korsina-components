import { UsersActionTypes } from './users.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchUsersCollectionStart = () => ({
	type: UsersActionTypes.FETCH_USERS_COLLECTION_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchUsersCollectionSuccess = users => ({
	type: UsersActionTypes.FETCH_USERS_COLLECTION_SUCCESS,
	payload: users,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchUsersCollectionFailure = errorMessage => ({
	type: UsersActionTypes.FETCH_USERS_COLLECTION_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Clear	       	                                        */
/* ================================================================ */

export const clearUsersCollection = () => ({
	type: UsersActionTypes.CLEAR_USERS_COLLECTION,
});
