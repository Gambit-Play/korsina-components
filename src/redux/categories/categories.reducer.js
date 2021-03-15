import { CategoriesActionTypes } from './categories.types';

const INITIAL_STATE = {
	categories: [],
	isFetching: false,
	errorCategories: '',
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process: START                                                  */
		/* ================================================================ */
		case CategoriesActionTypes.FETCH_CATEGORIES_COLLECTION_START:
			return {
				...state,
				isFetching: true,
			};
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case CategoriesActionTypes.FETCH_CATEGORIES_COLLECTION_SUCCESS:
			return {
				...state,
				isFetching: false,
				categories: action.payload,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case CategoriesActionTypes.FETCH_CATEGORIES_COLLECTION_FAILURE:
			return {
				...state,
				isFetching: false,
				errorCategories: action.payload,
			};
		/* ================================================================ */
		/*  Clear Categories                                                */
		/* ================================================================ */
		case CategoriesActionTypes.CLEAR_CATEGORIES_COLLECTION:
			return {
				...state,
				categories: [],
				isFetching: false,
				errorCategories: '',
			};
		default:
			return state;
	}
};
