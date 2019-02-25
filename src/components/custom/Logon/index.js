import React from 'react';
import { Redirect } from 'react-router-dom';
import Store from '../../../utils/stores';

const Logon = ({ children }) => {
	return Store.getState().accessButtonClick.userId !== ""
		? (<Redirect to="home" />)
		: (children);
};

export default Logon;