import React from 'react';

const BrandButtonStyle = `bg-purple-to-blue bn br-pill f3 fw4 h3 link mb1 o-50 v-mid w-90-ns white-90`;

const BrandButton = ({ children, className, onClick }) => {
	return (
		<button
            type = {`button`}
            className = {`${BrandButtonStyle} ${className}`}
            onClick = { onClick }
        >
        	{ children }
        </button>
	);
};

export default BrandButton;