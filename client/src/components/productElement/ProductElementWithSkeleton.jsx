import React from 'react';
import ProductElement from './ProductElement';
import ProductElementSkeleton from './ProductElementSkeleton';

/**
 * Returns the product element.
 * @param {IProduct} product an object
 * @param {boolean} isLoading an object
 */
const ProductElementWithSkeleton = (product, isLoading) => {
	if (isLoading) {
		return <ProductElementSkeleton />;
	}

	return <ProductElement product={product} />;
};

export default ProductElementWithSkeleton;
