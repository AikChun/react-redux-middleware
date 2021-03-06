import { combineReducers } from 'redux';
import UsersReducer from './users';

const rootReducer = combineReducers({
	users: UsersReducer
});

export default rootReducer;
