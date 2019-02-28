import React from 'react';
import Cover from '../Cover';

const Card = ({	
	authors,
	cover,
	date,
	plataforms,
	synopsis,
	title
}) => (
	<section class="pl3 pr3">
		<Cover alt={title} src={cover} className="fl mr3" />
		<h2 className="di f5 fl ma0">{title}</h2><br/>
		{`by ${authors} in ${date}`}<br/><br/>
		{synopsis}
	</section>
);

export default Card;