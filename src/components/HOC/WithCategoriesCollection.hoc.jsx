import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import { selectCategories } from '../../redux/categories/categories.selectors';

// Redux: Actions
import { fetchCategoriesCollectionStart } from '../../redux/categories/categories.actions';

export const WithCategoriesCollection = WrappedComponent => {
	// Add Redux actions and state to the WrappedComponent
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors (categoriesState)
	const mapStateToProps = createStructuredSelector({
		categories: selectCategories,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		fetchCategoriesCollection: () =>
			dispatch(fetchCategoriesCollectionStart()),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};
