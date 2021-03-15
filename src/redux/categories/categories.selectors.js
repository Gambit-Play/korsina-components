import { createSelector } from 'reselect';

const selectCategoriesStore = state => state.categoriesState;

// Selects categoriesState.categories from the state
export const selectCategories = createSelector(
	[selectCategoriesStore],
	categoriesState => categoriesState.categories
);

// Selects categoriesState.isFetching from the state
export const selectIsFetching = createSelector(
	[selectCategoriesStore],
	categoriesState => categoriesState.isFetching
);

// Selects a single category based on the 'categoryId' input
export const selectCategory = categoryId =>
	createSelector([selectCategories], categories => categories[categoryId]);
