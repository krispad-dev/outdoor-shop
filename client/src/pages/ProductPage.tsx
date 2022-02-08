import React from 'react';
import ProductModule from '../components/ProductPage/PrductModule';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';

export default function ProductPage({ isLoggedIn }: { isLoggedIn: boolean }) {

	const { id } = useParams()

	return (
		<ProductPageContainer>
			<ProductModule isLoggedIn={isLoggedIn} id={id as string} />
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
