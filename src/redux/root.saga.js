import { all, call } from 'redux-saga/effects';

import { usersSagas } from './users/users.sagas';
import { categoriesSagas } from './categories/categories.sagas';

export default function* rootSaga() {
	yield all([call(usersSagas), call(categoriesSagas)]);
}
