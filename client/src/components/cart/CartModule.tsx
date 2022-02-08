import styled from 'styled-components';
import CartItemList from '../cart/CartItemList';
import useGetCart from '../../modules/cart/useGetCart';
import Button from '../global/Button';
import { cartTotal } from '../../helpers/cartTotal'

export default function CartModule({ isLoggedIn }: { isLoggedIn: boolean }) {
	const { data: cartItems } = useGetCart();

	return (
		<ProductModuleContainer>
			<div role={'img'} className='image-container'>
				<h3>VARUKORG ({cartItems?.data?.length} varor)</h3>
				<CartItemList cartItems={cartItems?.data} />
			</div>
			<div className='info-container'>
				<div className='inner-info-container'>
					<div className='totals-container'>
						<h3>TOTAL</h3>
						<p>Deltotal: {cartTotal(cartItems && cartItems?.data)}</p>
						<p>Frakt: Gratis</p>
						<p>Kostnad inkl. moms:{cartTotal(cartItems && cartItems?.data, true)} </p>
					</div>

					<Button text={'slutför köp'} />
				</div>
			</div>
			<div className='actions-container'>
				<div className='inner-actions-container'></div>
			</div>
		</ProductModuleContainer>
	);
}

const ProductModuleContainer = styled.div`
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
			display: flex;
			flex-direction: column;
			justify-content: space-between;
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
		h3 {
			margin-bottom: 1rem;
		}
		grid-area: image-container;
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
