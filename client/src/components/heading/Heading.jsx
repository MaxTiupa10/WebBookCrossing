import React from 'react';
import Container from '../container/Container.jsx';
import './Heading.scss';
import headingImage from '../../assets/img/heading/page-title-background.jpg';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs.jsx';

const Heading = ({ title }) => {
	return (
		<section className="heading">
			<Container className="heading__container">
				<h1 className='heading__title'>{title}</h1>
				<Breadcrumbs></Breadcrumbs>
			</Container>
			<div className="heading__image">
				<img src={headingImage} alt="Background" />
			</div>
		</section>
	);
};

export default Heading;
