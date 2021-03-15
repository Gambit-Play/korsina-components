import { useEffect } from 'react';
import { compose } from 'redux';

// Components
import { Box } from './components/atoms/Box/Box.styles';
import { WithCategoriesCollection } from './components/HOC/WithCategoriesCollection.hoc';
import { WithUsersCollection } from './components/HOC/WithUsersCollection.hoc';
import { SideMenu } from './components/organism/SideMenu.component';
import { users } from './data/dummy-data';

function App({ fetchUsersCollection, fetchCategoriesCollection }) {
	const user = users[1];

	useEffect(() => {
		fetchUsersCollection();
		fetchCategoriesCollection();
	}, [fetchUsersCollection, fetchCategoriesCollection]);

	return (
		<Box padding={10} center>
			<SideMenu
				image={user.avatar}
				userDepartment={user.department}
				userName={`${user.firstName} ${user.lastName}`}
			/>
		</Box>
	);
}

export default compose(WithUsersCollection, WithCategoriesCollection)(App);
