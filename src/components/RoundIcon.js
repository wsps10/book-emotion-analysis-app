import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RoundIcon = ({ bgColor="blue", color="white", iconName="facebook-f" }) => {
	return (
		<div>
		  Facebook: <FontAwesomeIcon icon="facebook-f"/>
		</div>
	);
}

export default RoundIcon;