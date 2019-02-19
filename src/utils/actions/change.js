import { 
	CHANGE_EMAIL_PENDING,
	CHANGE_EMAIL_SUCCESS,
	CHANGE_EMAIL_FAILED,
	CHANGE_PASSWORD,
	CHANGE_PASSWORDCHECK
 } from './actionTypes';
import api from '../api';

const createChangeAction = type => payload => ({
	type,
	payload
});

export const changePassword = createChangeAction(CHANGE_PASSWORD);
export const changePasswordCheck = createChangeAction(CHANGE_PASSWORDCHECK);

export const changeEmail = email => dispatch => {
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
