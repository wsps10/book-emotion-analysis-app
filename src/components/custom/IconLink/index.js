import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../Icon';
import '../../remake/a/a.css';

const IconLink = ({
	className,
	family="fas",
	icon="",
	text="",
	to="/"
}) => (
	<Link to={to} className={className}>
		<Icon family={family} icon={icon} className="mr2" />
		{text}
	</Link>
);

export default IconLink;