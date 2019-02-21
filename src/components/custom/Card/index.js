import React from 'react';

const Card = ({ 
	authors, 
	cover, 
	plataforms, 
	synopsis,
	title,
	date 
}) => {
	const author = authors.split(",")[0];
	const year = date.split("-")[0];

	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="cover" src={cover} />
			<div>
				<h2 className="f6">{title}</h2>
				<small>{author}</small>
			</div>
		</div>
	);
};

export default Card;