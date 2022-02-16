import styled from 'styled-components';
import Button from '../global/Button';

import useGetProduct from '../../modules/products/useGetProduct';
import useAddToCart from '../../modules/cart/useAddToCart';
import useGetCart from '../../modules/cart/useGetCart';
import CartItemCounter from '../cart/CartItemCounter';

import { useContext, useEffect } from 'react';
import { UiStateContext } from '../../context/UiStateContext';
import { Cart } from '../../models/Cart';
import { formatSek } from '../../helpers/formatSek';
import { isInCart } from '../../helpers/isInCart';

export default function ProductModule({ isLoggedIn, id }: { isLoggedIn: boolean; id: string }) {
	const { data: product } = useGetProduct(id);
	const { data: cartItems } = useGetCart();
	const { mutate, isSuccess } = useAddToCart();
	const { state, dispatch } = useContext(UiStateContext);

	const currentCartItem = cartItems?.data?.filter(
		(cartItem: Cart) => cartItem.product_id === parseInt(id)
	)[0];

	const isDisabledCounter = currentCartItem?.item_count >= currentCartItem?.in_stock;
	const isDisabledAddToCartBtn = product?.data?.in_stock <= 0;


	function addToCartHandler() {
		mutate(id);
	}

	useEffect(() => {
		if (isSuccess) {
			dispatch({
				type: 'SET_ACTIVATE_SNACK',
				payload: `${currentCartItem?.product_name} ligger nu i din korg :) `,
			});
		}
	}, [isSuccess]);

	return (
		<ProductModuleContainer image={product?.data?.image}>
			<div role={'img'} className='image-container'></div>

			<div className='info-container'>
				<div className='inner-info-container'>
					<div>
						<h3>{product?.data?.product_name}</h3>
						<p>{product?.data?.description}</p>
					</div>
				</div>
			</div>

			<div className='actions-container'>
				<div className='inner-actions-container'>
					<div className='inner-actions-info-container'>
						<h4>Kvar i webblager: {product?.data?.in_stock} </h4>
						<h4>{formatSek(product?.data?.price)}</h4>
					</div>

					<Button
						isDisabled={isInCart(cartItems?.data, id as string) || !isLoggedIn || isDisabledAddToCartBtn}
						clickHandler={addToCartHandler}
						text={
							isInCart(cartItems?.data, id as string)
								? 'finns i cart'
								: !isLoggedIn
								? 'logga in för att handla'
								: 'lägg i cart'
						}
					/>
					{isInCart(cartItems?.data, id as string) && (
						<CartItemCounter
							disabled={isDisabledCounter}
							cart_item_id={currentCartItem?.cart_item_id}
							item_count={currentCartItem?.item_count}
						/>
					)}
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
		flex-direction: column;

		div.inner-info-container {
			flex-direction: column;
			display: flex;
			width: 95%;
			height: 95%;
			padding: 1rem;
			p {
				margin-top: 1rem;
			}
		}
	}

	div.actions-container {
		grid-area: actions-container;
		background-color: ${props => props.theme.cardColor};
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;


		div.inner-actions-container {
			display: flex;
			flex-direction: column;

			height: 95%;
			width: 95%;

			div.inner-actions-info-container {

				h4 {
					font-size: 0.7rem;
					padding: 0.4rem;
				}
				height: 100%;
				width: 100%;
				border: 1px solid #ccc;
				border-radius: 5px;
				margin: 2rem 0rem;
			}
		}

	}

	div.image-container {
		grid-area: image-container;
		background-color: ${props => props.theme.cardColor};
		background-image: url(${props => props.image});
		background-position: center;
		background-size: cover;
		width: 50vw;
		img {
			object-fit: cover;
			width: 50%;
		}
	}

	@media (max-width: 975px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 35%, 35%, 30%;

		grid-template-areas:
			'info-container info-container'
			'image-container actions-container';
	}
`;
