import React from 'react';
import Icon from '../Icon/Icon';

const RoundIcon = ({ className, family, icon, onClick, title }) => {
	return (
		<button 
			type = { `button` } 
			className = { "br-100 bw0 di dib grow-large h3 link ma2 ph3 pv2 w3 " + className }
			onClick = { onClick } 
			title = { title }
		>
			<Icon family={family} icon={icon} className="white-90 f3" />
		</button>
	);
}

export default RoundIcon;