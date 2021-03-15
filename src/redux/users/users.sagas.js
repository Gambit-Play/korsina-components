import { takeLatest, put, all, call } from 'redux-saga/effects';

// Utils
import { arrayToObject } from '../../utils/utils';

// Action Types
import { UsersActionTypes } from './users.types';

// Actions
import * as UsersActions from './users.actions';

// Firebase utils
import { getCollection, getDataFromRef } from '../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../firebase/collections.ids';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchUsersCollectionStart() {
	try {
		const collectionRef = yield call(getCollection, COLLECTION_IDS.USERS);
		const usersCollection = yield call(getDataFromRef, collectionRef);

		const newUsersCollection = yield call(
			arrayToObject,
			usersCollection,
			'id'
		);

		yield put(UsersActions.fetchUsersCollectionSuccess(newUsersCollection));
	} catch (error) {
		console.log(error.message);
		yield put(UsersActions.fetchUsersCollectionFailure(error.message));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchUsersCollectioStart() {
	yield takeLatest(
		UsersActionTypes.FETCH_USERS_COLLECTION_START,
		fetchUsersCollectionStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export function* usersSagas() {
	yield all([call(onFetchUsersCollectioStart)]);
}
