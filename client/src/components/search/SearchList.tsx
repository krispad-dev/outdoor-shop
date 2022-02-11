import { useContext } from 'react';
import { UiStateContext } from '../../context/UiStateContext';

import SearchListCard from './SearchListCard';
import useGetProducts from '../../modules/products/useGetProducts';
import styled from 'styled-components';
import { Product } from '../../models/Product';

export default function SearchList() {

	const { data: products } = useGetProducts();
	const { state } = useContext(UiStateContext)

	const filteredProducts = products?.data?.filter((product: Product) => 
		product.product_name
		.toLowerCase()
		.includes(state.searchString
		.toLowerCase()
	)).sort((a: Product, b:Product) => a.product_id - b.product_id )

	return (
		<ListContainer>
			{state.searchString && filteredProducts.map((product: Product) => {
				return	<SearchListCard key={product.product_id} {...product} />;
			})}
		</ListContainer>
	);
}

const ListContainer = styled.ul`
	background-color: #fff;
	position: absolute;
	left: 0.5rem;
	width: 100%;
	height: auto;
	margin-top: 0.5rem;
	z-index: 100;
`;
