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
		const { id, label, placeholder, onChange, type } = props;
		const { value } = state;

		return (
			<section className="ma3 tl">
				<label htmlFor={id}>{label}</label><br/>
				<input className="bn bb-ns h2 mt1 outline-0 w-100-ns"
					id = {id}
					onChange = {onChangeHandler(onChange)}
					type = {type}
					placeholder = {placeholder}
					value = {value}
				/>
			</section>
		);
	}
}

export default Field;