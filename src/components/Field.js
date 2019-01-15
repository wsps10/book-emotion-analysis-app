import React from 'react';

class Field extends React.Component {
	onChangeHandler = (fn = e => e.target.value) => e => {
		const val = fn(e);
		const value = val === undefined ? e.target.value : val;
		
		this.setState({ value });
	};

	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};
	}

	render() {
		const { onChangeHandler, props, state } = this;
		const { id, label, onChange, type } = props;
		const { value } = state;

		return (
			<article>
				<label htmlFor={id}>{label}</label><br/>
				<input className="br4"
					id = {id}
					type = {type}
					onChange = {onChangeHandler(onChange)}
					value = {value}
				/>
			</article>
		);
	}
}

export default Field;