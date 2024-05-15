import React from 'react';
import './Features.scss';
import Container from '../container/Container';
import guaranteeURL from '../../assets/img/features-icons/guarantee.svg';
import shippingURL from '../../assets/img/features-icons/shipping.svg';
import supportURL from '../../assets/img/features-icons/support.svg';
import trophyURL from '../../assets/img/features-icons/trophy.svg';

const FeatureItem = ({ imageURL, title, text }) => {
	return (
		<div key={title} className="features__item item-feature">
			<div className="item-feature__icon">
				<img src={imageURL} alt="" />
			</div>
			<div className="item-feature__content">
				<div className="item-feature__title">{title}</div>
				<div className="item-feature__text">{text}</div>
			</div>
		</div>
	);
};

const Features = () => {
	const featuresArray = [
		{
			imageURL: trophyURL,
			title: 'High Quality',
			text: 'Crafted from top materials',
		},
		{
			imageURL: guaranteeURL,
			title: 'Warranty Protection',
			text: 'Over 2 years',
		},
		{
			imageURL: shippingURL,
			title: 'Free Shipping',
			text: 'Order over 150 $',
		},
		{
			imageURL: supportURL,
			title: '24 / 7 Support',
			text: 'Dedicated support',
		},
	];
	return (
		<div className="features">
			<Container className="features__container">
				{featuresArray.map((feature) => FeatureItem(feature))}
			</Container>
		</div>
	);
};

export default Features;
