import React from 'react';
import Container from '../container/Container';
import './GridContainer.scss'

const GridContainer = ({ items, renderItem, className }) => {
	return (
		<Container className={className}>
			<div className="grid-container">{items.map(renderItem)}</div>
		</Container>
	);
};

export default GridContainer;
