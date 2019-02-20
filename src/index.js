import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Feed from './pages/Feed';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import * as serviceWorker from './serviceWorker';
import Store from './utils/stores';

import 'tachyons';
import './index.css';
import './utils/styles/colors.css';
import './utils/styles/utils.css';
import './components/remake/a/a.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGoodreadsG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowUp, faCheck, faExclamation, faFacebookF, faGoodreadsG, faTwitter);

ReactDOM.render(
	<Provider store={Store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={Feed} />
				<Route path="/login" exact={true} component={Login} />
				<Route path="/home" exact={true} component={Feed} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.register();