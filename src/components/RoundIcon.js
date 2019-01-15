import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RoundIcon = ({ bgColor="blue", color="white", family, name }) => {
	return (
		<section>
		  <FontAwesomeIcon icon={[family, name]}/>
		</section>
	);
}

export default RoundIcon;