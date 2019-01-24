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
			<section className="bg-red-9 f3 ma4 tl">
				<label htmlFor={id} className="b red">{label}</label><br/>
				<input className="bg-red-9 bn bb-ns h2 mt1 outline-0 w-100-ns"
					id = {id}
					onChange = {onChangeHandler(onChange)}
					type = {type}
					placeholder = {placeholder}
					value = {value}
				/>
				<small className="light-red i">erro</small>
			</section>
		);
	}
}

export default Field;