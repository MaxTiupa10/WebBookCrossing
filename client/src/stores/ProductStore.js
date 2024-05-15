import { makeAutoObservable } from 'mobx';

export class ProductStore {
	constructor() {
		/** @type {Array.<IProduct>}*/
		this._page = 0;
		this._totalPage = 0;
		this._totalCount = 0;
		this._limit = 2;
		// fill initial array to show skeleton loader in shop
		this._products = new Array(this._limit);
		makeAutoObservable(this);
	}

	/** @param {Array.<IProduct>} products*/
	setProducts(products) {
		this._products = products;
	}
	setPage(page) {
		this._page = page;
	}
	setLimit(limit) {
		this._limit = limit;
	}
	setTotalPage(totalPage) {
		this._totalPage = totalPage;
	}
	setTotalCount(totalCount) {
		this._totalCount = totalCount;
	}

	/** @return {Array.<IProduct>}*/
	get products() {
		return this._products;
	}
	get totalPage() {
		return this._totalPage;
	}
	get totalCount() {
		return this._totalCount;
	}
	get page() {
		return this._page;
	}
	get limit() {
		return this._limit;
	}
}
