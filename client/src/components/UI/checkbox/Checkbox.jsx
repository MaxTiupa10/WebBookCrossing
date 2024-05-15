import React from 'react';
import './Checkbox.scss';

const Checkbox = ({ className, id, label, ...props }) => {
	return (
		<div className={'checkbox' + (className ?? '')}>
			<label className="checkbox__label" htmlFor={id}>
				<input
					className="checkbox__input"
               id={id}
					{...props}
					type="checkbox"
				/>
				<span></span>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
