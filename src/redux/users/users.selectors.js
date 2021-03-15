import { createSelector } from 'reselect';

const selectUsersStore = state => state.usersState;

// Selects usersState.users from the state
export const selectUsersCollection = createSelector(
	[selectUsersStore],
	usersState => usersState.users
);
