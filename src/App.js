import React from 'react';

import 'tachyons';
import './index.css';
import './utils/styles/colors.css';
import './utils/styles/utils.css';
import './components/remake/a/a.css';

import Access from './pages/Access/Access';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGoodreadsG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight, faCheck, faExclamation, faFacebookF, faGoodreadsG, faTwitter);

const App = () => {
	return (
		<Access />
	);
}

export default App;