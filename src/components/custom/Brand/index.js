import React from 'react';
import './styles/index.css';

const Brand = ({ className }) => (
	<h1 className={`b black context-menu di font-major-mono f1 ma0 unselectable purple--first-letter ${className}`}>
		Kanoon.
	</h1>
);

export default Brand;