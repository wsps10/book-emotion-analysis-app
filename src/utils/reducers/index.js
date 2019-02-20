import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import loginAndSignUpReducer from './loginAndSignUpReducer';
import passwordsReducer from './passwordsReducer';
import recommendationsReducer from './recommendationsReducer';
 
const Reducers = combineReducers({
	accessButtonClick: loginAndSignUpReducer,
	emailChange: emailReducer,
	passwordChange: passwordsReducer,
	passwordCheckChange: passwordsReducer,
	requestRecommendations: recommendationsReducer
});

export default Reducers;