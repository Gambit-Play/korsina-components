import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Redux: Selectors
import { selectUsersCollection } from '../../redux/users/users.selectors';

// Redux: Actions
import { fetchUsersCollectionStart } from '../../redux/users/users.actions';

export const WithUsersCollection = WrappedComponent => {
	// Add Redux actions and state to the WrappedComponent
	const WithData = props => {
		return <WrappedComponent {...props} />;
	};

	// Redux: Selectors (usersState)
	const mapStateToProps = createStructuredSelector({
		users: selectUsersCollection,
	});

	// Redux: Actions
	const mapDispatchToProps = dispatch => ({
		fetchUsersCollection: () => dispatch(fetchUsersCollectionStart()),
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithData);
};
