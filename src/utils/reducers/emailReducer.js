import { 
	CHANGE_EMAIL_PENDING,
	CHANGE_EMAIL_SUCCESS,
	CHANGE_EMAIL_FAILED
} from '../actions/actionTypes';

const isEmailValid = email => /^[a-z](\w|\.|-)*@[a-z]+(\.[a-z]+)+$/.test(email.toLowerCase());
const initialState = {
	email: "", 
	emailIsNew: false,  
	emailIsValid: false,
	emailRequestIsPending: false,
	emailRequestIsSuccessful: false,
};

const emailReducer = (state=initialState, action) => {
	const { payload, type } = action;

	switch(type) {
		case CHANGE_EMAIL_PENDING:
			return {
				...state,
				...payload,
				emailIsPending: true,
				emailRequestIsSuccessful: false,
			};
		case CHANGE_EMAIL_SUCCESS:
			const { email, emailIsNew } = payload;
			const emailIsValid = isEmailValid(email);

			return {
				...state,
				emailIsNew,
				emailIsValid,
				emailIsPending: false,
				emailRequestIsSuccessful: true
			};
		case CHANGE_EMAIL_FAILED:
			return {
				...state,
				emailRequestIsPending: false,
				emailRequestIsSuccessful: false
			}
		default:
			return state;
	}
};

export default emailReducer;