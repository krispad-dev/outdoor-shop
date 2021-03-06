import React from 'react';
import ProductList from '../components/MainProductsPage/ProductList';
import ProductListHeader from '../components/MainProductsPage/ProductListHeader';
import StyledPageContainer from '../styled-components/StyledPageContainer'

export default function MainProductsPage() {
	return (
		<StyledPageContainer>
			<ProductList />
		</StyledPageContainer>
	);
}

