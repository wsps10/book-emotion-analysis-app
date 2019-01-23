import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RoundIcon = ({ bgColor="blue", color="white", family, name, title }) => {
	return (
		<button type="button" className="boxmodel" data-toggle="tooltip" data-placement="top" title={title}>
			<FontAwesomeIcon icon={[family, name, title]}/>
		</button>
	);
}

export default RoundIcon;