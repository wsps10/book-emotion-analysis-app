import { CHANGE_PASSWORD, CHANGE_PASSWORDCHECK } from '../actions/actionTypes';

const initialState = {
	password: "",
	passwordIsValid: false,
	passwordCheck: "",
	passwordsMatch: false
};

const passwordsReducer = (state=initialState, action) => {
	const { payload, type } = action;
	const isChangePassword = type === CHANGE_PASSWORD;
	const isChangePasswordCheck = type === CHANGE_PASSWORDCHECK;

	const password = isChangePassword ? payload : state.password;
	const passwordCheck = isChangePassword ? state.passwordCheck : payload;
	const passwordsMatch = password === passwordCheck;

	if (isChangePassword || isChangePasswordCheck) {
		const passwordIsValid = password.length >= 6;
		return {
			password,
			passwordIsValid,
			passwordCheck,
			passwordsMatch
		};
	} else {
		return state;
	}
};

export default passwordsReducer;