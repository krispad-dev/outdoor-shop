import React from 'react';
import styled from 'styled-components';
import Button from '../global/Button';

import useGetProduct from '../../modules/products/useGetProduct';
import useAddToCart from '../../modules/cart/useAddToCart';
import useGetCart from '../../modules/cart/useGetCart';

import { isInCart } from '../../helpers/isInCart';



export default function ProductModule({ isLoggedIn, id }: { isLoggedIn: boolean, id: string }) {	
	
	const { data: product } = useGetProduct(id);
	const { data: cartItems } = useGetCart();
	const { mutate, data } = useAddToCart();

	function addToCartHandler() {
		mutate(id);
	}

	return (
		<ProductModuleContainer image={product?.data?.image}>
			<div role={'img'} className='image-container'></div>
			<div className='info-container'>
				<div className='inner-info-container'>
					<h3>{product?.data?.product_name}</h3>
					<p>{product?.data?.description}</p>
					<p>{product?.data?.price},00 kr</p>
				</div>
			</div>
			<div className='actions-container'>
				<div className='inner-actions-container'>
					<Button 
					isDisabled={isInCart(cartItems?.data, id as string) || !isLoggedIn } 
					clickHandler={addToCartHandler} 
					text={isInCart(cartItems?.data, id as string) 
						? 'finns i cart' 
						: !isLoggedIn 
						? 'logga in för att handla' 
						: 'lägg i cart'} 
					/>
				</div>
			</div>
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
		background-color: ${props => props.theme.cardColor};
		display: flex;
		justify-content: center;
		align-items: center;

		div.inner-info-container {
			width: 95%;
			height: 95%;
		}
	}

	div.actions-container {
		display: flex;
		justify-content: center;
		div.inner-actions-container {
			display: flex;
			align-items: flex-end;
			height: 95%;
			width: 95%;
		}
		grid-area: actions-container;
		background-color: ${props => props.theme.cardColorDark};
	}

	div.image-container {
		grid-area: image-container;
		background-color: ${props => props.theme.cardColor};
		background-image: url(${props => props.image});
		background-position: center;
		background-size: cover;
	}

	@media (max-width: 975px) {
		grid-template-columns: 1fr;
		grid-template-rows: 35%, 35%, 30%;

		grid-template-areas:
			'info-container'
			'image-container'
			'actions-container';
	}
`;
