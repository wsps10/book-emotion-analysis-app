import {
	REQUEST_RECOMMENDATIONS_BY_ID_PENDING,
	REQUEST_RECOMMENDATIONS_BY_ID_SUCCESS,
	REQUEST_RECOMMENDATIONS_BY_ID_FAILED
} from '../actions/actionTypes';

const initialState = {
	recommendations: [],
	recommendationsRequestIsPending: false
};

const recommendationsReducer = (state=initialState, action) => {
	const { type, payload } = action;

	switch(type) {
		case REQUEST_RECOMMENDATIONS_BY_ID_PENDING:
			return {
				...state,
				recommendationsRequestIsPending: true
			};
		case REQUEST_RECOMMENDATIONS_BY_ID_SUCCESS:
			return {
				...state,
				recommendations: payload.recommendations,
				recommendationsRequestIsPending: false
			};
		case REQUEST_RECOMMENDATIONS_BY_ID_FAILED:
			return {
				...state,
				recommendationsRequestIsPending: false
			};
		default:
			return state;
	}
};

export default recommendationsReducer;
