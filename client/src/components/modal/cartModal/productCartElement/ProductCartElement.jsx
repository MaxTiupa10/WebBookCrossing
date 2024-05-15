import React from 'react';
import './ProductCartElement.scss';
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../../../utils/paths';

/**
 * 
 * @param {Object} props
 * @param {CartItem} props.cartItem
 * @returns 
 */
const ProductCartElement = ({ cartItem, deleteCartItem, ...props }) => {
	const product = cartItem.product
	const productLink = PRODUCT_ROUTE + '/' + product.productId;

	return (
		<div className="cart-content__product product-cart">
			<Link to={productLink} className="product-cart__image-ibg">
				<img src={product.images[0].image} alt={product.images[0].name} />
			</Link>
			<div className="product-cart__content">
				<Link to={productLink} className="product-cart__name">
					{product.productName}
				</Link>
				<div className="product-cart__info">
					<span className="amount">{cartItem.amount}</span>X
					<span className="price">
						<span>{product.productPrice}</span>
					</span>
				</div>
			</div>
			<button
				type="button"
				onClick={() => deleteCartItem(product.productId)}
				className="product-cart__button _icon-cross"
			/>
		</div>
	);
};

export default ProductCartElement;
