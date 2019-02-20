import React from 'react';
import Card from '../Card';

const CardList = ({ books }) => {
	return (
		<div className="flex justify-between">
			{
				books.map((book, i) => {
					const {
						author, 
						cover, 
						plataforms, 
						sinopse,
						title,
						year 
					} = book;
					return (
						<Card 
							key={i}
							author={author}
							cover={cover}
							title={title}
						/>
					);
				})
			}
		</div>
	);
};

export default CardList;