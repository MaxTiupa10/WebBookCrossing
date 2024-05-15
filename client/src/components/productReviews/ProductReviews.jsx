import React from 'react';
import './ProductReviews.scss';
import ProductReview from '../productReview/ProductReview.jsx';

function productReviews({ reviews, className }) {
	const classNames = ['product-reviews', className];
	return (
		<div className={classNames.join(' ')}>
			{reviews.map((elem, index) => (
				<ProductReview key={index} review={elem} />
			))}
		</div>
	);
}

export default productReviews;
