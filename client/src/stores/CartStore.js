import { makeAutoObservable } from 'mobx';
import { testArray } from '../utils/testData';

export class CartStore {
	constructor() {
		/** @type {Array.<CartItem>} */
		this._cartItems = []
		// this._cartItems = testArray.data.products.map((product) => {
		// 	return { product: product, amount: 2 };
		// });
		makeAutoObservable(this);
	}

	get cartItems() {
		return this._cartItems;
	}

	get amountOfItems() {
		return this._cartItems.length;
	}

	get totalCost() {
		return this._cartItems.reduce((sum, next) => {
			return sum + next.product.productPrice * next.amount;
		}, 0);
	}

	/**
	 * @param {number} productID id of the product to find;
	 */
	isProductInCart(productID) {
		return Boolean(this._cartItems.find((item) => item.product.productId !== productID));
	}

	/**
	 * @param {number} productID id of the product to delete;
	 */
	deleteCartItem(productID) {
		this._cartItems = this._cartItems.filter(
			(item) => item.product.productId !== productID
		);
	}

	/**
	 * @param {CartItem} product
	 */
	addCartItem(cartItem) {
		this._cartItems.push(cartItem);
	}
}
