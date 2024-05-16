import { observer } from 'mobx-react';
import React, { useState, useContext, useReducer, useRef } from 'react';
import { Context } from '../../index.js';
import { ProductStore } from '../../stores/ProductStore.js';
import Container from '../container/Container.jsx';
import './ShopFilter.scss';
import SelectWithoutDropDown from '../UI/select/SelectWithoutDropDown.jsx';
import SearchInput from '../modal/searchModal/searchInput/SearchInput.jsx';
const options = [
	{ value: '4', label: '4' },
	{ value: '8', label: '8' },
	{ value: '16', label: '16' },
];

const sortOptions = [
	{ value: 'productName', label: 'By name' },
	{ value: 'productPrice', label: 'By price' },
	{ value: 'productCategory', label: 'By category' },
];

const sortOrders = [
	{ value: 'asc', label: 'Min to max' },
	{ value: 'desc', label: 'Max to min' },
];

const ShopFilter = observer(
	({ curPage, fetchProducts, setCustomLimit, customLimit }) => {
		const [request, setRequest] = useState([
			['page', curPage],
			['limit', customLimit],
			['sortBy', 'none'],
		]);
		const [sortOption, setSortOption] = useState(sortOptions[0]);
		const [sortOrder, setSortOrder] = useState(sortOrders[0]);
		const [from, setFrom] = useState('');
		const [to, setTo] = useState('');
		const context = useContext(Context);
		/** @type {ProductStore} */
		const products = context.products;

		function addParam(param) {
			for (let i = 0; i < request.length; i++) {
				if (request[i][0] === param[0]) {
					const res = request.map((e) => (e[0] === param[0] ? param : e));
					setRequest(res);
					return res;
				}
			}
			const res = [...request, param];
			setRequest(res);
			return res;
		}

		return (
			<div className="shop-filter">
				<Container className="shop-filter__container">
					<div className="shop-filter__filters">
						<div className="shop-filter__filter">
							<div className="shop-filter__buttons">
								<button
									type="button"
									className="shop-filter__filter-button _icon-filters"
								>
									Filter
								</button>
							</div>
							<div className="shop-filter__info">
								<div className="shop-filter__text">
									{`Showing ${products.limit * products.page + 1}-${Math.min(products.limit * (products.page + 1), products.totalCount)} of ${products.totalCount} results`}
								</div>
							</div>
						</div>
					</div>
					<div className="shop-filter__display">
						<div className="shop-filter__show">
							<div className="shop-filter__input-container">
								<label>
									From
									<input
										value={from}
										onChange={(e) => setFrom(e.target.value)}
										onBlur={() => {
											const res = addParam(['minPrice', from]);
											fetchProducts(...res);
										}}
										onKeyDown={(e) => {
											if (e.keyCode == 13) {
												const res = addParam(['minPrice', from]);
												fetchProducts(...res);
											}
										}}
										className="shop-filter__input"
										label="from"
									></input>
								</label>
								<label>
									To
									<input
										value={to}
										onChange={(e) => setTo(e.target.value)}
										onBlur={() => {
											const res = addParam(['maxPrice', to]);
											fetchProducts(...res);
										}}
										onKeyDown={(e) => {
											if (e.keyCode == 13) {
												const res = addParam(['maxPrice', to]);
												fetchProducts(...res);
											}
										}}
										className="shop-filter__input"
										label="from"
									></input>
								</label>
							</div>
						</div>
						<div className="shop-filter__show">
							<span>Show</span>
							<SelectWithoutDropDown
								onChange={(e) => {
									setCustomLimit(Number(e.value));
									const res = addParam(['limit', Number(e.value)]);
									fetchProducts(...res);
								}}
								className="shop-filter__show-filter"
								options={options}
								defaultValue={options[1]}
							/>
						</div>
						<div className="shop-filter__sort">
							<span>Sort By</span>
							<SelectWithoutDropDown
								onChange={(e) => {
									const res = addParam(['sortBy', e.value]);
									fetchProducts(...res);
								}}
								className="shop-filter__sort-filter"
								options={sortOptions}
							/>
						</div>
						<div className="shop-filter__sort">
							<SelectWithoutDropDown
								onChange={(e) => {
									const res = addParam(['sort', e.value]);
									fetchProducts(...res);
								}}
								className="shop-filter__sort-filter_little"
								options={sortOrders}
								defaultValue={sortOrders[0]}
							/>
						</div>
					</div>
					<div className="shop-filter__search-container">
						<SearchInput
							onChange={(e) => {
								const res = addParam(['search', e.target.value]);
								fetchProducts(...res);
							}}
							onBlur={(e) => {
								const res = addParam(['search', e.target.value]);
								fetchProducts(...res);
							}}
							className="shop-filter__search"
						/>
					</div>
				</Container>
			</div>
		);
	}
);

export default ShopFilter;
