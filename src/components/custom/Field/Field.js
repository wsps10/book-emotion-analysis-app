import React from 'react';
import './styles/floating-hint.css';
import './styles/states.css';
import './styles/utils.css';

const Field = ({ className, error="error", hint="", id, label, onChange, value, type }) => {
	return (
		<section className={`f3 flex flex-column ma2 pl1 pr1 tl ${className}`}>
			<label htmlFor={id} className="b mb1">{label}</label>
			<input id={id} className="bn bb-ns h2 mt2 outline-0 anima-transp-placeholder w-100-ns"
				id = { id }
				onChange = { onChange }
				type = { type }
				placeholder = { hint }
				value = { value }
			/>
			<small className="f6 anima-floating-hint gray i">{hint}</small>
			<small className="i mt-1-n msg z-1">{error}</small>
		</section>
	);
};

export default Field;