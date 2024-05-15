import React from 'react';
import './ProductSearchElement.scss';
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../../../utils/paths';

/**
 * @param {Object} props
 * @param {IProduct} props.searchItem
 * @param {(id: number) => {}} props.deletesearchItem Ssearch
 * @returns
 */
const ProductSearchElement = ({ searchItem }) => {
	const product = searchItem;
	const productLink = PRODUCT_ROUTE + '/' + product.productId;

	return (
		<div className="search-content__product product-search">
			<Link to={productLink} className="product-search__image-ibg">
				<img src={product.images[0].image} alt={product.images[0].name} />
			</Link>
			<div className="product-search__content">
				<Link to={productLink} className="product-search__name">
					{product.productName}
				</Link>
				<div className="product-search__info">
					<span className="price">
						<span>{product.productPrice}</span>
					</span>
				</div>
			</div>
			<button type="button" className="product-search__button _icon-cross" />
		</div>
	);
};

export default ProductSearchElement;
