import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ className, family, icon }) => {
	return (
		<FontAwesomeIcon icon={[family, icon]} className={`ma1 ${className}`}/>
	);
};

export default Icon;