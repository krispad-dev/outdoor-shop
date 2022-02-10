import styled from 'styled-components';
import CartItemList from '../cart/CartItemList';
import useGetCart from '../../modules/cart/useGetCart';
import Button from '../global/Button';
import { cartTotal } from '../../helpers/cartTotal';
import useAuth from '../../modules/auth/useAuth';
import usePlaceOrder from '../../modules/order/usePlaceOrder';
import BtnSpinner from '../global/loaders/BtnSpinner';

export default function CartModule({ isLoggedIn }: { isLoggedIn: boolean }) {
	const { data: cartItems } = useGetCart();
	const { data: data } = useAuth()
	const { mutate: placeOrder, isLoading } = usePlaceOrder()

	function placeOrderHandler() {
		placeOrder()
	}

	const loggedInUser = data?.user; 
	
	const isCartItemsLength = cartItems && cartItems?.data?.length;
	const isCartItems = cartItems && cartItems?.data?.length > 0;

	const totalSumExclVat = cartTotal(isCartItems && cartItems?.data, false);
	const totalSumInclVat = cartTotal(isCartItems && cartItems?.data, true);

	return (
		<ProductModuleContainer>
			<div role={'img'} className='image-container'>
				{isCartItems && <CartItemList cartItems={cartItems && cartItems?.data} />}
			</div>
			<div className='info-container'>
				<div className='inner-info-container'>
					<h3>VARUKORG ({isCartItemsLength} varor)</h3>
					<div className='totals-container'>
						<h3>TOTAL</h3>
						<p>Frakt: Gratis</p>
						<p>Deltotal: <em>{totalSumExclVat}</em></p>
						<p>Kostnad inkl. moms: <em>{totalSumInclVat}</em> </p>
					</div>
				</div>
			</div>
			<div className='actions-container'>
				<div className='inner-actions-container'>
					<div className='inner-info-container'>
						<h3>Leveransuppgifter: </h3>

						<p>Address: {loggedInUser?.address}</p>
						<p>Postnummer:{loggedInUser?.zipCode} </p>
						<p>Stad: {loggedInUser?.city} </p>
						<p>Orderbekräftelse till: {loggedInUser?.email} </p>
					</div>

					<Button spinner={<BtnSpinner/>} isLoading={isLoading} clickHandler={placeOrderHandler} text={'slutför köp'} />
				</div>
			</div>
		</ProductModuleContainer>
	);
}

const ProductModuleContainer = styled.div`

	h3, h2 {
		font-weight: 500;
		opacity: ${props => props.theme.textHighEmph};
	}

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
			width: 90%;
			height: 90%;
		}
	}

	div.actions-container {
		display: flex;
		justify-content: center;
		align-items: center;
		div.inner-actions-container {
			display: flex;
			align-items: flex-start;
			flex-direction: column;
			justify-content: space-between;
			height: 90%;
			width: 90%;
		}
		grid-area: actions-container;
		background-color: ${props => props.theme.cardColorDark};
	}

	div.image-container {	
		grid-area: image-container;
		background-position: center;
		background-size: cover;
	}

	@media (max-width: 675px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;

		grid-template-areas:
			'info-container actions-container'
			'image-container image-container';
	}
`;
