import React from 'react';
import './ProductReview.scss';
import StarRating from '../UI/starRating/StarRating';
function ProductReview({ review, className }) {
	const classNames = ['product-review', className];
	review.user = {};
	review.user.userName = 'John Sigma';
	return (
		<div className={classNames.join(' ')}>
			<div className='product-review__header'>
				<div className="product-review__user-name">
					{review.user.userName}
				</div>
				<div className="product-review__rate">
					<StarRating rate={review.rate} />
				</div>
			</div>
			<div className="product-review__message">{review.massage}</div>
		</div>
	);
}

export default ProductReview;
