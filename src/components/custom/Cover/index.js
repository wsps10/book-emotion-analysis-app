import React from 'react';

const Cover = ({ 
	alt, 
	src, 
	className, 
	style={} 
}) => (
	<img alt={alt} src={src} className={className} style={{
		...style,
		height: "146px",
		width: "98px"
	}} />
);

export default Cover;