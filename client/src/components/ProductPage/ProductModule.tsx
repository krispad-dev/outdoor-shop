import styled from 'styled-components';
import Button from '../global/Button';

import useGetProduct from '../../modules/products/useGetProduct';
import useAddToCart from '../../modules/cart/useAddToCart';
import useGetCart from '../../modules/cart/useGetCart';

import { formatSek } from '../../helpers/formatSek';
import { isInCart } from '../../helpers/isInCart';

export default function ProductModule({ isLoggedIn, id }: { isLoggedIn: boolean; id: string }) {
	const { data: product } = useGetProduct(id);
	const { data: cartItems } = useGetCart();
	const { mutate } = useAddToCart();

	function addToCartHandler() {
		mutate(id);
	}

	return (
		<ProductModuleContainer image={product?.data?.image}>
			<div role={'img'} className='image-container'>
			</div>

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
					<div>
						<h4>Kvar i lager:  {product?.data?.in_stock} /st</h4>
						<h4>{formatSek(product?.data?.price)}</h4>
					</div>
					<Button
						isDisabled={isInCart(cartItems?.data, id as string) || !isLoggedIn}
						clickHandler={addToCartHandler}
						text={
							isInCart(cartItems?.data, id as string)
								? 'finns i cart'
								: !isLoggedIn
								? 'logga in för att handla'
								: 'lägg i cart'
						}
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

	grid-template-columns: 50vw, 50vw;
	grid-template-rows: 1fr, 1fr;

	grid-template-areas:
		'image-container info-container'
		'image-container actions-container';

	div.info-container {
		grid-area: info-container;
		background-color: ${props => props.theme.cardColor};
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
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
		display: flex;
		justify-content: center;

		div.inner-actions-container {
		
			display: flex;
			align-items: flex-start;
			flex-direction: column;
			justify-content: flex-end;
			height: 95%;
			width: 95%;
			div {
				h4 {
					font-size: 1rem;
					padding: 0.5rem;
				}
				height: 100%;
				width: 100%;
				border: 1px solid #ccc;
				border-radius:  5px;
				margin: 2rem 0rem;
			}
		}
		grid-area: actions-container;
		background-color: ${props => props.theme.cardColor};
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
