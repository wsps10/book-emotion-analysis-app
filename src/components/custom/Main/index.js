import React from 'react';

const Main = ({ children, className, style={} }) => (
	<main className={`absolute bg-white-90 flex vh-100 w-100 ${className}`} style={style}>
		{children}
	</main>
);

export default Main;