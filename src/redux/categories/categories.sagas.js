import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Utils
import { arrayToObject } from '../../utils/utils';

// Firebase utils
import { getCollection, getDataFromRef } from '../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../firebase/collections.ids';

// Selectors
import { selectUsersCollection } from '../users/users.selectors';

// Action Types
import { CategoriesActionTypes } from './categories.types';

// Action
import {
	fetchCategoriesCollectionSuccess,
	fetchCategoriesCollectionFailure,
} from './categories.actions';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchCategoriesCollectionStart() {
	try {
		const collectionRef = yield call(
			getCollection,
			COLLECTION_IDS.CATEGORIES
		);
		const categoriesCollection = yield call(getDataFromRef, collectionRef);
		const users = yield select(selectUsersCollection);
		const newCategories = yield categoriesCollection.map(category => {
			return {
				...category,
				createdBy: category.createdById
					? users[category.createdById].displayName
					: '',
				createdByAvatar: category.createdById
					? users[category.createdById].avatar
					: '',
				updatedBy: category.updatedById
					? users[category.updatedById].displayName
					: '',
				updatedByAvatar: category.updatedById
					? users[category.updatedById].avatar
					: '',
			};
		});
		const categories = yield call(arrayToObject, newCategories, 'id');

		yield put(fetchCategoriesCollectionSuccess(categories));
	} catch (error) {
		console.log(error);
		yield put(fetchCategoriesCollectionFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchCategoriesStart() {
	yield takeLatest(
		CategoriesActionTypes.FETCH_CATEGORIES_COLLECTION_START,
		fetchCategoriesCollectionStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export function* categoriesSagas() {
	yield all([call(onFetchCategoriesStart)]);
}
