import { $authHost, $host } from '.';

export class ProductsAPI {
	static async fetchProducts(page = 1, limit = 5, sortBy = 'not') {
		const response = await $host.get('products/shop', {
			params: {
				page: 0,
				limit: 5,
			},
		});

		console.log(response);
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
		const response = await $authHost.post('products/add', product);
		console.log(response);
		return response.data;
	}
}
