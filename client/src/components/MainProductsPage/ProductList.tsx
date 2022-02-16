import React from 'react';
import ProductListItem from './ProductListItem';
import styled from 'styled-components';
import useGetProducts from '../../modules/products/useGetProducts';
import { Product } from '../../models/Product';
import SkeletonColor from '../global/loaders/SkeletonLoader';
const loaderArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

export default function ProductList() {
	const { data: products, isLoading } = useGetProducts();

	const sortedProducts = products?.data?.sort(
		(a: Product, b: Product) => a.product_id - b.product_id
	);

	return (
		<OuterListContainer>
			{sortedProducts &&
				sortedProducts?.map((product: Product) => (
					<ProductListItem key={product.product_id} {...product} />
				))}

			{isLoading && loaderArray.map(loader => <SkeletonColor key={loader} />)}
		</OuterListContainer>
	);
}

const OuterListContainer = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
	gap: 1rem;
	height: 70vh;
`;
