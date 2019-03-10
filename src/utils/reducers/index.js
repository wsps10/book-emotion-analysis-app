import { combineReducers } from 'redux';
import accessReducer from './accessReducer';
import bookReducer from './bookReducer';
import emailReducer from './emailReducer';
import feelingReducer from './feelingReducer';
import passwordsReducer from './passwordsReducer';
import recommendationsReducer from './recommendationsReducer';
import twitterReducer from './twitterReducer';

const Reducers = combineReducers({
	access: accessReducer,
	book: bookReducer,
	email: emailReducer,
	feeling: feelingReducer,
	password: passwordsReducer,
	recommendations: recommendationsReducer,
	twitter: twitterReducer
});

export default Reducers;