import { makeAutoObservable } from 'mobx';
import { testArray } from '../utils/testData';

export class FavoriteStore {
	constructor() {
		/** @type {Array.<IProduct>} */
		this._favoritesItems = [] //testArray.data.products;
		makeAutoObservable(this);
	}

	get favoritesItems() {
		return this._favoritesItems;
	}

	get amountOfItems() {
		return this._favoritesItems.length;
	}

	/**
	 * @param {number} productId id of the product to find;
	 */
	isProductInFavorites(productId) {
		return Boolean(
			this._favoritesItems.find((item) => item.productId === productId)
		);
	}

	/**
	 * @param {number} productId id of the product to delete;
	 */
	deleteFavoriteItem(productId) {
		this._favoritesItems = this._favoritesItems.filter(
			(item) => item.productId !== productId
		);
	}

	/**
	 * @param {IProduct} product
	 */
	addFavoriteItem(favoriteItem) {
		// if (!this.isProductInFavorites(favoriteItem.productId))
			this._favoritesItems.push(favoriteItem);
	}
}
