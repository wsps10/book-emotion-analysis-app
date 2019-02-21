import React from 'react';
import Card from '../Card';

const CardList = ({ books=[] }) => {
	return (
		<div className="flex justify-around">
			{
				books.map((book, i) => {
					const {
						autor: authors, 
						img_capa: cover,
						data: date,
						plataforma: plataforms, 
						sinopse: synopsis,
						nome_livro: title
					} = book;
					return (
						<Card 
							key={i}
							authors={authors}
							cover={cover}
							date={date}
							plataforms={plataforms}
							synopsis={synopsis}
							title={title}
						/>
					);
				})
			}
		</div>
	);
};

export default CardList;