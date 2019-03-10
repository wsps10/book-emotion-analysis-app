import { 
	TWITTER_SIGN_UP_REQUEST_FAILED,
	TWITTER_SIGN_UP_REQUEST_PENDING,
	TWITTER_SIGN_UP_REQUEST_SUCCESS
} from '../actions/actionTypes';
import { twitterState } from './initialStates';

const twitterReducer = (state=twitterState, action) => {
	const { type, payload } = action;
	switch(type) {
		case TWITTER_SIGN_UP_REQUEST_PENDING:
			return {
				...state,
				twitterRequestIsPending: true
			}
		case TWITTER_SIGN_UP_REQUEST_SUCCESS:
			return {
				...state,
				twitterToken: payload,
				twitterRequestIsPending: false
			}
		case TWITTER_SIGN_UP_REQUEST_FAILED:
			return {
				...state,
				twitterRequestIsPending: false
			}
		default:
			return state;
	}
};

export default twitterReducer;
