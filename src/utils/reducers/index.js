import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import passwordsReducer from './passwordsReducer';
 
const Reducers = combineReducers({
	emailChange: emailReducer,
	passwordChange: passwordsReducer,
	passwordCheckChange: passwordsReducer
});

export default Reducers;