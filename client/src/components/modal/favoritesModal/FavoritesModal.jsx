import React, { useContext } from 'react';
import Modal from '../base/Modal';
import { observer } from 'mobx-react';
import './FavoritesModal.scss';
import { Link } from 'react-router-dom';
import { CHECKOUT_ROUTE, CART_ROUTE } from '../../../utils/paths';
import ModalTop from '../base/ModalTop';
import { Context } from '../../../index.js';
import { FavoriteStore } from '../../../stores/FavoriteStore.js';
import ProductFavoriteElement from './productFavoriteElement/ProductFavoriteElement.jsx';

/**
 * @param {Object} props
 * @param {modalHandler} props.modalHandler
 */
const FavoritesModal = observer(({ modalHandler }) => {
	const closeModal = modalHandler.close;

	const context = useContext(Context);
	/** @type {FavoriteStore} */
	const favorites = context.favorites;

	const favoritesItems = favorites.favoritesItems;

	const deleteItem = (productId) => {
		favorites.deleteFavoriteItem(productId);
	};

	return (
		<Modal
			className="favorites-content"
			active={modalHandler.isOpen}
			closeModal={closeModal}
			variant="centered"
		>
			<ModalTop title="Favorites" closeModal={closeModal} />
			<ul className="favorites-content__products">
				{favoritesItems.map((favoritesItem) => (
					<li key={favoritesItem.productId}>
						<ProductFavoriteElement
							favoriteItem={favoritesItem}
							deleteFavoriteItem={deleteItem}
						/>
					</li>
				))}
			</ul>
			<div className="favorites-content__bottom">
				<div className="favorites-content__actions">
					<Link to={CART_ROUTE} className="favorites-content__button">
						Cart
					</Link>
					<Link to={CHECKOUT_ROUTE} className="favorites-content__button">
						Checkout
					</Link>
					<Link to={''} className="favorites-content__button">
						Comparison
					</Link>
				</div>
			</div>
		</Modal>
	);
});

export default FavoritesModal;
