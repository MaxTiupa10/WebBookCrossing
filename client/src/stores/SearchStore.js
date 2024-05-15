import { makeAutoObservable } from 'mobx';
import { testArray } from '../utils/testData';

export class SearchStore {
	constructor() {
		/** @type {Array.<IProduct>}*/
		this._page = 0;
		this._totalPage = 0;
		this._totalCount = 0;
		this._limit = 2;
		this._searchItems = testArray.data.products;
		makeAutoObservable(this);
	}

	/** @param {Array.<IProduct>} searchItems*/
	setProducts(searchItems) {
		this._searchItems = searchItems;
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
	get searchItems() {
		return this._searchItems;
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
