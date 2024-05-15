import React from 'react';
import './ProductElement.scss';

const ProductElementSkeleton = () => {
	return (
		<article key={Math.random() * Date.now()} className="item-product skeleton">
			<div className="item-product__image-ibg"></div>
			<div className="item-product__content">
				<div className="item-product__name"></div>
				<div className="item-product__category"></div>
				<div className="item-product__price">
					<div className="item-product__new-price"></div>
				</div>
			</div>
			<div className="item-product__panel">
				<div className="item-product__actions">
					<button type="button" className="item-product__item _icon-share">
						Share
					</button>
					<button
						type="button"
						className="item-product__item _icon-compare"
					>
						Compare
					</button>
					<button type="button" className="item-product__item _icon-heart">
						Like
					</button>
				</div>
			</div>
		</article>
	);
};

export default ProductElementSkeleton;
