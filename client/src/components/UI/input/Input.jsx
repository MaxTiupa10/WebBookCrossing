import React from 'react';
import './Input.scss';

/**
 *	@param {Object} InputProps
 * @param {string} InputProps.label
 * @param {string} InputProps.className
 * @param {string} InputProps.id
 * @param {boolean} InputProps.hasError
 * @param {string} [InputProps.errorMessage]
 * @param {React.RefObject} ref
 * @returns
 */
const Input = (
	{ label, className, id, hasError, errorMessage = null, ...props },
	ref
) => {
	return (
		<div
			className={[
				'input-wrapper ',
				className ?? '',
				hasError && 'error',
			].join(' ')}
		>
			{label && (
				<label className="input-wrapper__label" htmlFor={id}>
					<span className="input-wrapper__label-text">{label}</span>
					{hasError && errorMessage && (
						<span className="input-wrapper__error-message">{errorMessage}</span>
					)}
				</label>
			)}
			<input ref={ref} className="input-wrapper__input" id={id} {...props} />
		</div>
	);
};

export default React.forwardRef(Input);
