import React, { useContext, useLayoutEffect, useState } from 'react';
import Container from '../../components/container/Container';
import './Product.scss';
import { useParams } from 'react-router-dom';
import { ProductsAPI } from '../../http/productsAPI';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Loader from '../../components/UI/loader/Loader';
import { useFetching } from '../../hooks/useFetching';
import { useMediaQuery } from '../../hooks/useMediaQuery.js';
import ProductInformation from '../../components/productInformation/ProductInformation.jsx';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index.js';
import { CartStore } from '../../stores/CartStore.js';
import Tabs from '../../components/UI/tabs/Tabs.jsx';
import ProductReviews from '../../components/productReviews/ProductReviews.jsx';

const Product = observer(() => {
	/**
	 * @type {[IFullProduct, React.Dispatch<IFullProduct>]} state
	 */
	const [product, setProduct] = useState(undefined);
	const { id } = useParams();
	const context = useContext(Context);
	/** @type {CartStore}  */
	const cartStore = context.cart;

	const text =
		'Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.\n\nWeighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.';

	const isMobileSize = !useMediaQuery('(min-width: 48rem)');
	const [getProduct, isProductLoading, productError] = useFetching(() => {
		ProductsAPI.fetchProduct(id).then((data) => {
			setProduct(data);
		});
	});
	useLayoutEffect(() => {
		getProduct();
	}, []);

	if (isProductLoading || product === undefined) {
		return (
			<main>
				<div className="product__loader-container">
					<Loader className="product__loader" />
				</div>
			</main>
		);
	}

	return (
		<main>
			<div className="product__navigation">
				<Container>
					<Breadcrumbs
						className={'product__navigation-links'}
						lastCrumb={product.productName}
					/>
				</Container>
			</div>
			<Container>
				<ProductInformation
					isProductLoading={isProductLoading}
					product={product}
					isMobileSize={isMobileSize}
				></ProductInformation>
			</Container>
			<div className="product__tabs-container">
				<Container>
					<Tabs
						className="product__tabs product-tabs"
						elements={[
							{
								title: 'Description',
								content: (
									<div className="product-tabs__description">
										{text}
									</div>
								),
							},
							{
								title: 'Reviews [' + product.amountOfReviews + ']',
								content: (
									<ProductReviews reviews={product.productReviews} />
								),
							},
						]}
					></Tabs>
				</Container>
			</div>
		</main>
	);
});

export default Product;
