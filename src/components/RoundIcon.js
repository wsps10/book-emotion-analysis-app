import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const wrappedStyle = "absolute db dynamic-center left-50 top-50 f3";
const wrapperStyle = "br-100 bw0 di dib dim f6 h3 link ma1 relative ph3 pv2 w3";

const RoundIcon = ({ bgColor="bg-dark-blue", color="white-90", family, name, onClick, title }) => {
	return (
		<button type="button" className={`${wrapperStyle} ${bgColor} ${color}`} onClick={onClick} title={title}>
			<FontAwesomeIcon icon={[family, name]} className={wrappedStyle}/>
		</button>
	);
}

export default RoundIcon;