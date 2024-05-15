import React from 'react';
import './Textarea.scss';
function Textarea({label, id, className, ...props }) {
	const classNames = ['textarea-wrapper', className];
	return (
		<div className={classNames.join(" ")}>
			{label && (
				<label className="textarea-wrapper__label" htmlFor={id}>
					{label}
				</label>
			)}
			<textarea id={id} className="textarea-wrapper__textarea" {...props}></textarea>
		</div>
	);
}

export default Textarea;
