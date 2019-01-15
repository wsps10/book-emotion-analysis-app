import React from 'react';
import LoginPage from './pages/LoginPage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF, faGoodreadsG, faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF, faGoodreadsG, faTwitter);

const App = () => {
	return (
		<LoginPage />
	);
}

export default App;