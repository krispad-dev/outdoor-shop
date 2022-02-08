import React from 'react';
import ProductList from '../components/MainProductsPage/ProductList';
import ProductListHeader from '../components/MainProductsPage/ProductListHeader';
import styled from 'styled-components';

export default function MainProductsPage() {
	return (
		<MainProductsPageContainer>
			<ProductListHeader
				buttons={['alla', 'vinter', 'vandra', 'klättra', 'verktyg', 'bära', 'sova']}
			/>
			<ProductList />
		</MainProductsPageContainer>
	);
}

const MainProductsPageContainer = styled.section`
	padding: 1rem;
	overflow-y: scroll;
`;
