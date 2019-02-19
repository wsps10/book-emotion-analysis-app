import { 
	CLICK_LOGIN_PENDING,
	CLICK_LOGIN_SUCCESS,
	CLICK_LOGIN_FAILED,
	CLICK_SIGNUP_PENDING,
	CLICK_SIGNUP_SUCCESS,
	CLICK_SIGNUP_FAILED,
 } from './actionTypes';
import api from '../api';

const createClickAction = (
	pending, 
	success, 
	failed,
	endpoint
) => (
	user, 
	password
) => (
	dispatch
) => {
	dispatch({ type: pending });

	api[endpoint](user, password)
	.then(({email, id, status}) => dispatch({
		type: success,
		payload: {
			id,
			status
		}
	}))
	.catch(err => dispatch({ type: failed }));
};

export const clickLogin = createClickAction(
	CLICK_LOGIN_PENDING, 
	CLICK_LOGIN_SUCCESS, 
	CLICK_LOGIN_FAILED,
	"login"
);
export const clickSignUp = createClickAction(
	CLICK_SIGNUP_PENDING, 
	CLICK_SIGNUP_SUCCESS, 
	CLICK_SIGNUP_FAILED,
	"signUp"
);