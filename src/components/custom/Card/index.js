import React from 'react';
import Cover from '../Cover';

const cutText = (text=``, maxLength=0) => {
	const words = text.split(` `);
	const short = words.reduce((str, word) => str.length >= maxLength
		? str
		: `${str} ${word}`
	);

	return short.length === text.length ? short : `${short}...`;
};

const Card = ({	
	authors,
	cover,
	date,
	plataforms,
	synopsis,
	title
}) => {
	const authorsNames = authors.split(`, `)
	const normalizedAuthors = authorsNames.reduce((str, author, i, {length}) => i === length - 1
		? `${str} and ${author}`
		: `${str}, ${author}`
	);
	const authorship = normalizedAuthors === `` ? `` : `by ${normalizedAuthors}`;

	const year = date.split(`-`)[0];
	const release = year === `` ? `` : `in ${year}`;
	const signature = `${authorship} ${release}`;

	const summary = cutText(synopsis, 1100);

	return (
		<section class="pl3 pr3">
			<Cover alt={title} src={cover} className="fl mr3" />
			<h2 className="di f5 fl ma0">{title}</h2><br/>
			{signature}<br/><br/>
			{summary}
		</section>
	);
};

export default Card;