
import { combineReducers } from 'redux';
import { adminReducer } from './reducers/admin';
import { loginReducer } from './reducers/login';


const appReducers = combineReducers({
	"admin": adminReducer,
	"login": loginReducer,
	"__SUPER_SECRET_FEATURE_FLAGS__": (state = {}) => state
});

export default appReducers;
