import { 
	CHANGE_EMAIL_PENDING,
	CHANGE_EMAIL_SUCCESS,
	CHANGE_EMAIL_FAILED,
	CHANGE_PASSWORD,
	CHANGE_PASSWORDCHECK
 } from './actionTypes';
import api from '../api';

export const updateEmail = email => dispatch => {
	dispatch({ 
		type: CHANGE_EMAIL_PENDING,
		payload: { email }
	});

	api.searchEmail(email)
	.then(json => dispatch({
		type: CHANGE_EMAIL_SUCCESS,
		payload: {
			email,
			emailIsNew: json.status === "Email not found"
		}
	}))
	.catch(err => dispatch({ type: CHANGE_EMAIL_FAILED }));
};

export const updatePassword = payload => ({
	type: CHANGE_PASSWORD,
	payload
});

export const updatePasswordCheck = payload => ({
	type: CHANGE_PASSWORDCHECK,
	payload
});