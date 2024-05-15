import { $authHost, $host } from '.';

export class ProductsAPI {
	static async fetchProducts(page = 1, limit = 5, sort = 'not') {
		const response = await $host.get('products/shop', {
			params: {
				_page: page,
				_limit: limit,
				_sort: sort,
			},
		});

		return response.data;
	}

	static async fetchProduct(id) {
		const response = await $host.get('products/item/' + id);
		return response.data;
	}

	/**
	 * @param {IFullProduct} product - new product
	 */
	static async createNewProduct(product) {
		const response = await $authHost.post('products/add', {
			params: { ...product },
		});
		return response.data;
	}
}
