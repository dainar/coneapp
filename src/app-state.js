
import { combineReducers } from 'redux';
import { adminReducer } from './reducers/admin';
import { loginReducer } from './reducers/login';


const appReducers = combineReducers({
	"admin": adminReducer,
	"login": loginReducer
});

export default appReducers;
