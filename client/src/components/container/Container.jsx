import React from 'react';
import './Container.scss';

const Container = ({ children, className, ...props }) => {
	return (
		<div {...props} className={[className, 'container'].join(' ')}>
			{children}
		</div>
	)
}

export default Container;