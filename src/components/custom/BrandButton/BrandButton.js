import React from 'react';
import './BrandButton.css';

const BrandButtonStyle = `bg-purple-to-blue bn bw0 br-pill f6 fw4 h3 link mb1 v-mid w-90-ns white-90`;

const BrandButton = ({ children, className, enabled, onClick }) => {
	return (
		<button
            className = {`${BrandButtonStyle} ${className}`}
            disabled = { !enabled }
            onClick = { onClick }
            type = {`button`}
        >
        	{ children }
        </button>
	);
};

export default BrandButton;