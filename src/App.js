import React from 'react';

import 'tachyons';
import './index.css';
import './utils/styles/colors.css';
import './utils/styles/utils.css';
import './components/remake/a/a.css';

import LoginPage from './pages/LoginPage/LoginPage';
import SigninPage from './pages/SigninPage/SigninPage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGoodreadsG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowCircleRight, faFacebookF, faGoodreadsG, faTwitter);

const App = () => {
	return (
		<SigninPage />
	);
}

export default App;