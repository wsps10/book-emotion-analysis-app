import {
	REQUEST_RECOMMENDATIONS_BY_ID_PENDING,
	REQUEST_RECOMMENDATIONS_BY_ID_SUCCESS,
	REQUEST_RECOMMENDATIONS_BY_ID_FAILED
} from './actionTypes';
import api from '../api';

export const requestRecommendationsById = id => dispatch => {
	dispatch({ type: REQUEST_RECOMMENDATIONS_BY_ID_PENDING });

	api.recommendationsById(id)
	.then(recommendations => dispatch({
		type: REQUEST_RECOMMENDATIONS_BY_ID_SUCCESS,
		payload: { recommendations }
	}))
	.catch(error => dispatch({
		type: REQUEST_RECOMMENDATIONS_BY_ID_FAILED,
		payload: { error }
	}));
};
