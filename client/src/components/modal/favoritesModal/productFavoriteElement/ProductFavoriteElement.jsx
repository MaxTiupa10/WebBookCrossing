import React from 'react';
import './ProductFavoriteElement.scss';
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../../../utils/paths';

/**
 * @param {Object} props
 * @param {IProduct} props.favoriteItem
 * @param {(id: number) => {}} props.deleteFavoriteItem
 * @returns 
 */
const ProductFavoriteElement = ({ favoriteItem, deleteFavoriteItem }) => {
	const product = favoriteItem
	const productLink = PRODUCT_ROUTE + '/' + product.productId;

	return (
		<div className="favorite-content__product product-favorite">
			<Link to={productLink} className="product-favorite__image-ibg">
				<img src={product.images[0].image} alt={product.images[0].name} />
			</Link>
			<div className="product-favorite__content">
				<Link to={productLink} className="product-favorite__name">
					{product.productName}
				</Link>
				<div className="product-favorite__info">
					<span className="price">
						<span>{product.productPrice}</span>
					</span>
				</div>
			</div>
			<button
				type="button"
				onClick={() => deleteFavoriteItem(product.productId)}
				className="product-favorite__button _icon-cross"
			/>
		</div>
	);
};

export default ProductFavoriteElement;
