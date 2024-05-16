import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, PRODUCT_ROUTE } from '../../utils/paths';
import './ProductElement.scss';
import { Context } from '../..';
import { FavoriteStore } from '../../stores/FavoriteStore';

/**
 * Returns the product element.
 * @param {Object} props an object
 * @param {IProduct} props.product an object
 */
const ProductElement = ({ product }) => {
	const context = useContext(Context);
	/** @type {FavoriteStore} */
	const favorites = context.favorites;

	const [isInFavorites, setIsInFavorites] = useState(
		favorites.isProductInFavorites(product.productId)
	);

	const productLink = PRODUCT_ROUTE + '/' + product.productId;

	const onFavoriteBtnClick = () => {
		if (isInFavorites) {
			favorites.deleteFavoriteItem(product.productId);
		} else {
			favorites.addFavoriteItem(product);
		}
		setIsInFavorites(!isInFavorites);
	};

	console.log(product.images[0]);

	return (
		<article key={product.productId} className="item-product">
			<Link to={productLink} className="item-product__image-ibg">
				<img src={product.images[0].image} alt={product.productName} />
			</Link>
			<div className="item-product__content">
				<Link to={productLink} className="item-product__name">
					{product.productName}
				</Link>
				<Link to={HOME_ROUTE} className="item-product__category">
					{product.productCategory}
				</Link>
				<div className="item-product__price">
					<div className="item-product__new-price">
						{product.productPrice} ₴
					</div>
					{/* <div className="item-product__old-price">Rp 3.500.000</div> */}
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
					<button
						type="button"
						className={
							'item-product__item _icon-heart ' +
							(isInFavorites ? 'active' : '')
						}
						onClick={onFavoriteBtnClick}
					>
						Like
					</button>
				</div>
			</div>
			{/* <ul className="item-product__labels">
				<li className="item-product__label item-product__label_discount">
					-30%
				</li>
				<li className="item-product__label item-product__label_new">New</li>
			</ul> */}
		</article>
	);
};

export default ProductElement;
