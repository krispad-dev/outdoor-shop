import React from 'react';
import ProductModule from '../components/ProductPage/PrductModule';
import StyledPageContainer from '../styled-components/StyledPageContainer'

import { useParams } from 'react-router-dom';

export default function ProductPage({ isLoggedIn }: { isLoggedIn: boolean }) {

	const { id } = useParams()

	return (
		<StyledPageContainer>
			<ProductModule isLoggedIn={isLoggedIn} id={id as string} />
		</StyledPageContainer>
	);
}

