import { 
	CLICK_LOGIN_PENDING,
	CLICK_LOGIN_SUCCESS,
	CLICK_LOGIN_FAILED,
	CLICK_SIGNUP_PENDING,
	CLICK_SIGNUP_SUCCESS,
	CLICK_SIGNUP_FAILED
} from '../actions/actionTypes';

const isAny = (val) => (...options) => options.includes(val);

const initialState = {
	loginOrSignUpHasFailed: false,
	loginOrSignUpHasSucceded: false,
	loginOrSignUpRequestHasFailed: false,
	loginOrSignUpRequestIsPending: false,
	userId: ""
};

const loginOrSignUpReducer = (state=initialState, action) => {
	const { payload, type } = action;
	const typeIsAny = isAny(type);
	const typeIsPending = typeIsAny(CLICK_LOGIN_PENDING, CLICK_SIGNUP_PENDING);
	const typeIsSuccess = typeIsAny(CLICK_LOGIN_SUCCESS, CLICK_SIGNUP_SUCCESS);
	const typeIsFailed = typeIsAny(CLICK_LOGIN_FAILED, CLICK_SIGNUP_FAILED);

	switch(true) {
		case typeIsPending:
			return {
				...state,
				loginOrSignUpHasFailed: false,
				loginOrSignUpHasSucceded: false,
				loginOrSignUpRequestHasFailed: false,
				loginOrSignUpRequestIsPending: true,
				userId: ""
			};
		case typeIsSuccess:
			const { id, status } = payload;
			const loginOrSignUpHasSucceded = status === "Success";
			const loginOrSignUpHasFailed = !loginOrSignUpHasSucceded;

			return {
				...state,
				loginOrSignUpHasFailed,
				loginOrSignUpHasSucceded,
				loginOrSignUpRequestHasFailed: false,
				loginOrSignUpRequestIsPending: false,
				userId: id
			};
		case typeIsFailed:
			return {
				...state,
				loginOrSignUpHasFailed: false,
				loginOrSignUpHasSucceded: false,
				loginOrSignUpRequestHasFailed: true,
				loginOrSignUpRequestIsPending: false,
				userId: ""
			};
		default:
			return state;
	}
};

export default loginOrSignUpReducer;