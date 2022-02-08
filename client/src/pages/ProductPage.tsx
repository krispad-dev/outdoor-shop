import React from 'react';
import ProductModule from '../components/ProductPage/PrductModule';
import styled from 'styled-components';

export default function ProductPage() {
	return (
		<ProductPageContainer>
			<ProductModule />
		</ProductPageContainer>
	);
}

const ProductPageContainer = styled.section`
padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 85vh;
`;
