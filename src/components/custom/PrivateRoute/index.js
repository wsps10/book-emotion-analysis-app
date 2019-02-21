import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Store from '../../../utils/stores';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		Store.getState().access.userId !== ""
			? <Component {...props} />
			: <Redirect to='/Login' />
	)} />
);

export default PrivateRoute;