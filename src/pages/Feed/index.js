import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/custom/App';
import BookCarousel from '../../components/custom/BookCarousel';
import Card from '../../components/custom/Card';

import { requestRecommendationsById } from '../../utils/actions';

import data from './data';

const mapStateToProps = ({ accessButtonClick, book, emailChange, requestRecommendations }) => ({
	...book,
	...emailChange,
	...accessButtonClick,
	...requestRecommendations
});

const mapDispatchToProps = dispatch => ({
	handleFeedLoad: userId => dispatch(requestRecommendationsById(userId))
});

class Feed extends React.Component {
	componentWillMount() {
		/*const { handleFeedLoad, userId } = this.props;
		handleFeedLoad(userId);*/
	}

	render() {
		const { 
			recommendations,
			authors,
			cover,
			date,
			plataforms,
			synopsis,
			title
		} = this.props;
		return (
			<App>
				<div className="flex h-100 items-center">
					<section className="w-40">
						<Card
							authors={authors}
							cover={cover}
							date={date}
							plataforms={plataforms}
							synopsis={synopsis}
							title={title}
						/>
					</section>
					<section className="flex flex-column items-center justify-center w-60">
						<BookCarousel books={data} title="main feeling" />
						<BookCarousel books={data} title="random books" />
					</section>
				</div>
			</App>
		);
	}
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(Feed);