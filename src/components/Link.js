import React from 'react';
import './Link.css';

const Link = ({text, address}) => {
	return (
		<a 
			href={address}
			className="no-underline anima--outline-to-background"
		>{text}</a>
	);
};

export default Link;