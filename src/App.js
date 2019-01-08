import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import LoginPage from './pages/LoginPage';

library.add(fab, faCheckSquare, faCoffee);

const App = () => {
	return (
		<LoginPage />
	);
}

export default App;