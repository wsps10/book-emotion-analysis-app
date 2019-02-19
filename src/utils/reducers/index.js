import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import loginAndSignUpReducer from './loginAndSignUpReducer';
import passwordsReducer from './passwordsReducer';
 
const Reducers = combineReducers({
	accessButtonClick: loginAndSignUpReducer,
	emailChange: emailReducer,
	passwordChange: passwordsReducer,
	passwordCheckChange: passwordsReducer
});

export default Reducers;