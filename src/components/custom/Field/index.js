import React from 'react';
import Icon from '../Icon';

import './styles/floating-hint.css';
import './styles/states.css';
import './styles/utils.css';

const Field = ({ className, error, hint, id, label, onChange, value, type }) => {
	return (
		<section className={`f4 flex flex-column pa1 tl ${className}`}>
			<span className="flex justify-between">
				<label htmlFor={id} className="b mb1">{label}</label>
				<Icon family="fas" icon="check" className="green-20 icon--ok" />
				<Icon family="fas" icon="exclamation" className="red icon--error" />
			</span>
			<input className="bb-ns bg-transparent bn h2 mt2 outline-0 anima-transp-placeholder w-100-ns"
				id={id}
				onChange={onChange}
				type={type}
				placeholder={hint}
				value={value}
			/>
			<small className="f6 anima-floating-hint gray-30 i">{hint}</small>
			<span className="min-h-small mt-1-n z-1">
				<small className="i msg">{error}</small>
			</span>
		</section>
	);
};

export default Field;