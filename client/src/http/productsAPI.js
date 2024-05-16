import { $authHost, $host } from '.';

export class ProductsAPI {
	static async fetchProducts(...args ) {
		const resObj = {}
		args.forEach((arg)=>resObj[arg[0]] = arg[1])
		const response = await $host.get('products/shop', {
			params: resObj
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
