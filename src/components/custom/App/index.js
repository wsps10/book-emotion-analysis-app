import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

const App = ({ children, className }) => (
	<Main>
		<Header />
			<article className={`h-100 w-100 ${className}`}>
				{children}
			</article>
		<Footer />
	</Main>
);

export default App;