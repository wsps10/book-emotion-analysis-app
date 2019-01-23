import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const buttonStyle = "br-100 bw0 di dib dim f6 h3 link ma1 relative ph3 pv2 w3";
const iconStyle = "absolute db dynamic-center left-50 top-50 f3 white-90";

const RoundIcon = ({ classes, family, name, onClick, title }) => {
	return (
		<button type="button" className={`${buttonStyle} ${classes}`} onClick={onClick} title={title}>
			<FontAwesomeIcon icon={[family, name]} className={iconStyle}/>
		</button>
	);
}

export default RoundIcon;