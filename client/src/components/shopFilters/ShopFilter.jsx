import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Context } from '../../index.js';
import { ProductStore } from '../../stores/ProductStore.js';
import Container from '../container/Container.jsx';
import './ShopFilter.scss';
import SelectWithoutDropDown from '../UI/select/SelectWithoutDropDown.jsx';

const options = [
	{ value: '16', label: '16' },
	{ value: '32', label: '32' },
	{ value: '64', label: '64' },
];

const ShopFilter = observer(() => {
	const context = useContext(Context);
	/** @type {ProductStore} */
	const products = context.products;

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
						<span>Show</span>
						<SelectWithoutDropDown
							className="shop-filter__show-filter"
							options={options}
							defaultValue={options[1]}
						/>
					</div>
					<div className="shop-filter__sort">
						<span>Sort By</span>
						<SelectWithoutDropDown
							className="shop-filter__sort-filter"
							options={options}
						/>
					</div>
				</div>
			</Container>
		</div>
	);
});

export default ShopFilter;
