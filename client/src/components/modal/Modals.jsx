import React from 'react';
import CartModal from './cartModal/CartModal';
import { memo } from 'react';
import FavoritesModal from './favoritesModal/FavoritesModal';
import SearchModal from './searchModal/SearchModal';
import { CART_MODAL, FAVORITES_MODAL, SEARCH_MODAL } from './modalNames';

/**
 * @param {Object} props
 * @param {(modalName) => modalHandler} props.getModalHandler
 * @returns
 */
const Modals = ({ getModalHandler }) => {
	const cartModalHandler = getModalHandler(CART_MODAL);
	const favoritesModalHandler = getModalHandler(FAVORITES_MODAL);
	const searchModalHandler = getModalHandler(SEARCH_MODAL);
	return (
		<>
			{cartModalHandler.isOpen && (
				<CartModal modalHandler={cartModalHandler} />
			)}
			{favoritesModalHandler.isOpen && (
				<FavoritesModal modalHandler={favoritesModalHandler} />
			)}
			{searchModalHandler.isOpen && (
				<SearchModal modalHandler={searchModalHandler} />
			)}
		</>
	);
};

export default memo(Modals);
