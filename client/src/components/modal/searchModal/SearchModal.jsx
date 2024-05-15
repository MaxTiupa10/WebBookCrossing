import React, { useContext, useState } from 'react';
import Modal from '../base/Modal.jsx';
import { observer } from 'mobx-react';
import './SearchModal.scss';
import { Link } from 'react-router-dom';
import { CHECKOUT_ROUTE, CART_ROUTE } from '../../../utils/paths.js';
import ModalTop from '../base/ModalTop.jsx';
import { Context } from '../../../index.js';
import { SearchStore } from '../../../stores/SearchStore.js';
import ProductSearchElement from './productSearchElement/ProductSearchElement.jsx';
import Input from '../../UI/input/Input.jsx';
import Button from '../../UI/button/Button.jsx';
import SearchInput from './searchInput/SearchInput.jsx';

/**
 * @param {Object} props
 * @param {modalHandler} props.modalHandler
 */
const SearchModal = observer(({ modalHandler }) => {
	const closeModal = modalHandler.close;

	const [searchQuery, setSearchQuery] = useState('');

	const context = useContext(Context);
	/** @type {SearchStore} */
	const searchStore = context.searchStore;

	const searchItems = searchStore.searchItems;

	const searchByQuery = (e) => {
		e.preventDefault();
		if (searchQuery.trim())
			console.log(searchQuery);
	};

	return (
		<Modal
			className="search-content"
			active={modalHandler.isOpen}
			closeModal={closeModal}
			variant="centered"
		>
			<ModalTop
				className="search-content__top"
				title="Search"
				closeModal={closeModal}
			/>
			<form
				method="POST"
				onSubmit={searchByQuery}
				className="search-content__input-query"
				name="search-query"
			>
				<SearchInput
					className="search-content__input"
					id="search-query"
					name="search-query"
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</form>
			<ul className="search-content__products">
				{searchItems.map((searchItem) => (
					<li key={searchItem.productId}>
						<ProductSearchElement searchItem={searchItem} />
					</li>
				))}
			</ul>
			<div className="search-content__bottom">
				<div className="search-content__actions">
					<Link to={CART_ROUTE} className="search-content__button">
						Cart
					</Link>
					<Link to={CHECKOUT_ROUTE} className="search-content__button">
						Checkout
					</Link>
					<Link to={''} className="search-content__button">
						Comparison
					</Link>
				</div>
			</div>
		</Modal>
	);
});

export default SearchModal;
