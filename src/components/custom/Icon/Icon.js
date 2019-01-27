import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ className, family, icon }) => {
	return (
		<FontAwesomeIcon icon={[family, icon]} className={`${className}`}/>
	);
};

export default Icon;