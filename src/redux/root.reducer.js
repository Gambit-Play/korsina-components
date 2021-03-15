import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import { usersReducer } from './users/users.reducer';
import { categoriesReducer } from './categories/categories.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['usersState', 'categoriesState'],
};

const rootReducer = combineReducers({
	usersState: usersReducer,
	categoriesState: categoriesReducer,
});

export default persistReducer(persistConfig, rootReducer);
