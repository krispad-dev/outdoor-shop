import React from 'react';
import ProductListItem from './ProductListItem';
import styled from 'styled-components';
import useGetProducts from '../../modules/products/useGetProducts';
import { Product } from '../../models/Product';
import SkeletonColor from '../global/loaders/SkeletonLoader';
const loaderArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

export default function ProductList() {
	const { data: products, isLoading } = useGetProducts();

	console.log(products);
	

	return (
		<OuterListContainer>

			{products?.data?.map((product: Product) => (
				<ProductListItem key={product.product_id} {...product} />
			))} 

{/* 			{isLoading && loaderArray.map((loader) => (
				<SkeletonColor key={loader} />
			))} */}
			
		</OuterListContainer>
	);
}

const OuterListContainer = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
	gap: 1rem;
	padding: 0rem 3rem;
	
`;
