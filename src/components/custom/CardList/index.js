import React from 'react';
import Card from '../Card';

const CardList = ({ books=[] }) => {
	return (
		<div className="flex justify-between">
			{
				books.map((book, i) => {
					const {
						autor: author, 
						img_capa: cover, 
						plataforma: plataforms, 
						sinopse: synopsis,
						nome_livro: title,
						data: date
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