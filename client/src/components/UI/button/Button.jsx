import React from 'react';
import './Button.scss'

/**
 * @returns Button
 * @param {Object} ButtonProps
 * @param {string} ButtonProps.className class of this button
 * @param {function} ButtonProps.onClick callback function for click
 * @param {"straight"|"rounded"} ButtonProps.variant variant of button
 * @param {"small"|"big"} ButtonProps.size size of button
 * @param {boolean} ButtonProps.fill is button filled 
 * @param {...any} props other props
 */
const Button = ({ className, onClick, variant='rounded', fill=false, size='big', children, ...props }) => {
	return (
		<button
			{...props}
			onClick={onClick}
			className={['btn', variant, size, fill ? 'fill' : '', className].join(' ')}
		>
			{children}
		</button>
	);
};

export default Button;
