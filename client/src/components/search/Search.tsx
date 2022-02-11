import { useRef, useContext } from 'react';
import { UiStateContext } from '../../context/UiStateContext';
import { Product } from '../../models/Product';

import SearchField from './SearchField';
import SearchList from './SearchList';
import styled from 'styled-components';
import useOutsideClick from '../../helpers/hooks/useOutsideClick';
import useGetProducts from '../../modules/products/useGetProducts';

export default function Search() {
	const ref = useRef<HTMLHeadingElement>(null);

	const { data: products } = useGetProducts();
	const { state, dispatch } = useContext(UiStateContext);
	

	const filteredProducts = products?.data
		?.filter((product: Product) =>
			product.product_name.toLowerCase().includes(state.searchString.toLowerCase())
		)
		.sort((a: Product, b: Product) => a.product_id - b.product_id);

	useOutsideClick(ref, () => {
		dispatch({
			type: 'SET_SEARCH_STRING',
			payload: '',
		});
	});

	return (
		<StyledSearchContainer ref={ref}>
			<SearchField />
			{state.searchString && <SearchList products={filteredProducts} />}
		</StyledSearchContainer>
	);
}

const StyledSearchContainer = styled.div`
	position: relative;
`;
