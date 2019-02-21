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
	loginOrSignUpUpHasFailed: false,
	loginOrSignUpUpHasSucceded: false,
	loginOrSignUpUpRequestHasFailed: false,
	loginOrSignUpUpRequestIsPending: false,
	userId: ""
};

const loginOrSignUpUpReducer = (state=initialState, action) => {
	const { payload, type } = action;
	const typeIsAny = isAny(type);
	const typeIsPending = typeIsAny(CLICK_LOGIN_PENDING, CLICK_SIGNUP_PENDING);
	const typeIsSuccess = typeIsAny(CLICK_LOGIN_SUCCESS, CLICK_SIGNUP_SUCCESS);
	const typeIsFailed = typeIsAny(CLICK_LOGIN_FAILED, CLICK_SIGNUP_FAILED);

	switch(true) {
		case typeIsPending:
			return {
				...state,
				loginOrSignUpUpHasFailed: false,
				loginOrSignUpUpHasSucceded: false,
				loginOrSignUpUpRequestHasFailed: false,
				loginOrSignUpUpRequestIsPending: true,
				userId: ""
			};
		case typeIsSuccess:
			const { id, status } = payload;
			const loginOrSignUpUpHasSucceded = status === "Success";
			const loginOrSignUpUpHasFailed = !loginOrSignUpUpHasSucceded;

			return {
				...state,
				loginOrSignUpUpHasFailed,
				loginOrSignUpUpHasSucceded,
				loginOrSignUpUpRequestHasFailed: false,
				loginOrSignUpUpRequestIsPending: false,
				userId: id
			};
		case typeIsFailed:
			return {
				...state,
				loginOrSignUpUpHasFailed: false,
				loginOrSignUpUpHasSucceded: false,
				loginOrSignUpUpRequestHasFailed: true,
				loginOrSignUpUpRequestIsPending: false,
				userId: ""
			};
		default:
			return state;
	}
};

export default loginOrSignUpUpReducer;