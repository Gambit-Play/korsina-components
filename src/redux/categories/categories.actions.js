import { CategoriesActionTypes } from './categories.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchCategoriesCollectionStart = () => ({
	type: CategoriesActionTypes.FETCH_CATEGORIES_COLLECTION_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchCategoriesCollectionSuccess = categories => ({
	type: CategoriesActionTypes.FETCH_CATEGORIES_COLLECTION_SUCCESS,
	payload: categories,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchCategoriesCollectionFailure = errorMessage => ({
	type: CategoriesActionTypes.FETCH_CATEGORIES_COLLECTION_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Clear                                                   */
/* ================================================================ */

export const clearCategoriesStart = () => ({
	type: CategoriesActionTypes.CLEAR_CATEGORIES_COLLECTION,
});
