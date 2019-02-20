import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import data from './data';
import CardList from '../../components/custom/CardList';

const mapStateToProps = ({ }) => ({

});

const mapDispatchToProps = dispatch => ({

});

class Feed extends React.Component {
	render() {
		const { userId } = this.prop;

		return (
			<main className="bg-gray-90 vh-100">

			</main>
		);
	}
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(Feed);