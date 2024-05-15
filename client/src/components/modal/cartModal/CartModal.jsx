import React, { useContext } from 'react';
import Modal from '../base/Modal';
import { observer } from 'mobx-react';
import './CartModal.scss';
import { Link } from 'react-router-dom';
import { CART_ROUTE, CHECKOUT_ROUTE } from '../../../utils/paths';
import ModalTop from '../base/ModalTop';
import { Context } from '../../../index.js';
import { CartStore } from '../../../stores/CartStore.js';
import ProductCartElement from './productCartElement/ProductCartElement.jsx';

/**
 * @param {Object} props
 * @param {modalHandler} props.modalHandler
 */
const CartModal = observer(({ modalHandler }) => {
	const closeModal = modalHandler.close;

	const context = useContext(Context);
	/** @type {CartStore} */
	const cart = context.cart;

	const cartItems = cart.cartItems;

	const deleteItem = (productId) => {
		cart.deleteCartItem(productId);
	};

	return (
		<Modal
			className="cart-content"
			active={modalHandler.isOpen}
			closeModal={closeModal}
			variant="aside"
		>
			<ModalTop title="Shopping Cart" closeModal={closeModal} />
			<ul className="cart-content__products">
				{cartItems.map((cartItem) => (
					<li key={cartItem.product.productId}>
						<ProductCartElement
							cartItem={cartItem}
							deleteCartItem={deleteItem}
						/>
					</li>
				))}
			</ul>
			<div className="cart-content__bottom">
				<div className="cart-content__text">
					Subtotal
					<span>
						<span data-total-sum="">{cart.totalCost}</span>
					</span>
				</div>
				<div className="cart-content__actions">
					<Link to={CART_ROUTE} className="cart-content__button">
						Cart
					</Link>
					<Link to={CHECKOUT_ROUTE} className="cart-content__button">
						Checkout
					</Link>
					<Link to={''} className="cart-content__button">
						Comparison
					</Link>
				</div>
			</div>
		</Modal>
	);
});

export default CartModal;
