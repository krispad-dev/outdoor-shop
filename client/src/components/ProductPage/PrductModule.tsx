import React from 'react';
import styled from 'styled-components';

import useGetProduct from '../../modules/products/useGetProduct';

import { useParams } from 'react-router-dom';

export default function ProductModule() {

  const { id } = useParams()
  const { data: product } = useGetProduct(id)


  

	return (
		<ProductModuleContainer image={product?.data?.image}  >
			<div role={'img'} className='image-container'></div>
			<div className='info-container'><h2>{product?.data?.product_name}</h2></div>
			<div className='actions-container'>garwega</div>
		</ProductModuleContainer>
	);
}

const ProductModuleContainer = styled.div<{ image: string }>`

  gap: 1rem;
	width: 100%;
	height: 100%;
	display: grid;

	grid-template-columns: 1fr, 1fr;
	grid-template-rows: 1fr, 1fr;

	grid-template-areas:
		'image-container info-container'
		'image-container actions-container';

	div.info-container {
    grid-area: info-container;
		background-color: ${props => props.theme.cardColor}
	}

	div.actions-container {
    grid-area: actions-container;
		background-color: ${props => props.theme.cardColorDark}
	}

	div.image-container {
    grid-area: image-container;
		background-color: ${props => props.theme.cardColor};
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
	}
`;
