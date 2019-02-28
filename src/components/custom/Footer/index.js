import React from 'react';
import { Link } from 'react-router-dom';

import '../../remake/a/a.css';

const Footer = ({ className }) => (
	<article className={`absolute b--gray bottom-0 w-100 z-1 ${className}`} style={{
		borderTopStyle: "solid",
		borderTopWidth: "1px"
	}}>
		<footer className="flex items-center justify-start pa3">
			<Link to="us" className="fw1 gray-40 mr3">us</Link>
			<Link to="how" className="fw1 gray-40 mr3">how</Link>
			<Link to="why" className="fw1 gray-40 mr3">why</Link>
		</footer>
	</article>
);

export default Footer;