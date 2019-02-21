import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CardList from '../../components/custom/CardList';

import { requestRecommendationsById } from '../../utils/actions';

const mapStateToProps = ({ accessButtonClick, emailChange, requestRecommendations }) => ({
	...emailChange,
	...accessButtonClick,
	...requestRecommendations
});

const mapDispatchToProps = dispatch => ({
	handleFeedLoad: userId => dispatch(requestRecommendationsById(userId))
});

class Feed extends React.Component {
	componentWillMount() {
		const { handleFeedLoad, userId } = this.props;
		handleFeedLoad(userId);
	}

	render() {
		const { recommendations } = this.props;
		return (
			<main className="bg-gray-90 vh-100">
				<CardList books={recommendations} />
			</main>
		);
	}
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(Feed);