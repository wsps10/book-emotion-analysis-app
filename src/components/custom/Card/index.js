import React from 'react';

const Card = ({ 
	author, 
	cover, 
	plataforms, 
	synopsis,
	title,
	year 
}) => {
	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="cover" src={cover} />
			<div>
				<h2>{title}</h2>
				<p>{author}</p>
			</div>
		</div>
	);
};

export default Card;