import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import Features from '../../components/features/Features.jsx';
import GridContainer from '../../components/gridContainer/GridContainer.jsx';
import Heading from '../../components/heading/Heading.jsx';
import Pagination from '../../components/pagination/Pagination.jsx';
import ProductElementWithSkeleton from '../../components/productElement/ProductElementWithSkeleton.jsx';
import ShopFilters from '../../components/shopFilters/ShopFilter.jsx';
import { useFetching } from '../../hooks/useFetching.jsx';
import { ProductsAPI } from '../../http/productsAPI.js';
import { Context } from '../../index.js';
import './Shop.scss';

function Shop() {
	const { products } = useContext(Context);

	//TODO: Race condition - if user change quickly pages, cancel request from the previous request

	const [fetchProducts, isLoading, error] = useFetching(
		async (page, limit) => {
			await ProductsAPI.fetchProducts(page, limit).then((data) => {
				products.setProducts(data.content);
				products.setTotalPage(data.totalPages);
				products.setTotalCount(data.totalElements);
			});
		},
		true
	);

	const onPageChange = (page) => {
		products.setPage(page);
		fetchProducts(page, products.limit);
	};

	useEffect(() => {
		fetchProducts(products.page, products.limit);
	}, []);

	return (
		<main className="shop">
			<Heading key="heading" title="Shop" />
			<ShopFilters />
			<GridContainer
				key="shop-items"
				items={products.products}
				renderItem={(product) =>
					ProductElementWithSkeleton(product, isLoading)
				}
			/>
			<Pagination
				key="pagination"
				onPageChange={onPageChange}
				pageCount={products.totalPage}
			/>
			<Features key="features" />
		</main>
	);
}

export default observer(Shop);
