import { CLICK_BOOK } from '../actions/actionTypes';

const initialState = {
	authors: "",
	cover: "",
	date: "",
	plataforms: "",
	synopsis: "",
	title: ""
};

const bookReducer = (state=initialState, action) => {
	const { payload, type } = action;
	switch(type) {
		case CLICK_BOOK:
			return payload;
		default:
			return state;
	}
};

export default bookReducer;