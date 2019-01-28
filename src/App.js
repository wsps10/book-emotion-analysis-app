import React from 'react';

import 'tachyons';
import './index.css';
import './utils/styles/colors.css';
import './utils/styles/utils.css';
import './components/remake/a/a.css';

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGoodreadsG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowUp, faCheck, faExclamation, faFacebookF, faGoodreadsG, faTwitter);

const App = () => {
	return (
		<Login />
	);
}

export default App;