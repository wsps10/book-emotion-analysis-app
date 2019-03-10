import { 
	LOGIN_REQUEST_FAILED,
	LOGIN_REQUEST_PENDING,
	LOGIN_REQUEST_SUCCESS,
	SIGN_UP_REQUEST_FAILED,
	SIGN_UP_REQUEST_PENDING,
	SIGN_UP_REQUEST_SUCCESS
} from '../actions/actionTypes';
import isAny from '../isAny';
import { accessState } from './initialStates';

const accessReducer = (state=accessState, action) => {
	const { payload, type } = action;
	const typeIsAny = isAny(type);
	const typeIsPending = typeIsAny(LOGIN_REQUEST_PENDING, SIGN_UP_REQUEST_PENDING);
	const typeIsSuccess = typeIsAny(LOGIN_REQUEST_SUCCESS, SIGN_UP_REQUEST_SUCCESS);
	const typeIsFailed = typeIsAny(LOGIN_REQUEST_FAILED, SIGN_UP_REQUEST_FAILED);

	switch(true) {
		case typeIsPending:
			return {
				...state,
				accessHasFailed: false,
				accessHasSucceded: false,
				accessRequestHasFailed: false,
				accessRequestIsPending: true,
				userId: ""
			};
		case typeIsSuccess:
			const { id, status } = payload;
			const accessHasSucceded = status === "Success";
			const accessHasFailed = !accessHasSucceded;

			return {
				...state,
				accessHasFailed,
				accessHasSucceded,
				accessRequestHasFailed: false,
				accessRequestIsPending: false,
				userId: id
			};
		case typeIsFailed:
			return {
				...state,
				accessHasFailed: false,
				accessHasSucceded: false,
				accessRequestHasFailed: true,
				accessRequestIsPending: false,
				userId: ""
			};
		default:
			return state;
	}
};

export default accessReducer;