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
				{!isCartItems && <div className='cart-item-placeholder'>Inga varor här för tillfället</div> }
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

						<div>

							<h3>Leveransuppgifter: </h3>
							<p>Address: <em> {loggedInUser?.address} </em></p>
							<p>Postnummer: <em> {loggedInUser?.zipCode} </em> </p>
							<p>Stad: <em> {loggedInUser?.city} </em> </p>
							<p>Orderbekräftelse till: <em>{loggedInUser?.email} </em></p>

						</div>
		
						<Button isDisabled={!isCartItems} spinner={<BtnSpinner/>} isLoading={isLoading} clickHandler={placeOrderHandler} text={'slutför köp'} />
				
				</div>
			</div>
		</ProductModuleContainer>

	);
}

const ProductModuleContainer = styled.div`
	em {
		font-weight: 600;
		text-transform: unset;
	}


	h3, h2 {
		font-weight: 500;
		opacity: ${props => props.theme.textHighEmph};
	}

	gap: 1rem;
	width: 100%;
	height: 100%;
	display: grid;
	

	grid-template-columns: 1fr 400px;
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

			p {
				margin: 0.5rem;
				font-size: 0.9rem;
			}
			
		}
	}

	div.actions-container {
		grid-area: actions-container;
		background-color: ${props => props.theme.cardColorDark};

	
		display: flex;
		justify-content: center;
		align-items: center;
		height: 95%;
		div.inner-actions-container {
			padding: 1rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;

			height: 85%;
			width: 95%;

			p {
				margin: 0.5rem;
				font-size: 0.9rem;
			}
		}

	}

	div.image-container {	
		grid-area: image-container;
		background-position: center;
		background-size: cover;

		div.cart-item-placeholder {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 100%;
			background-color: ${props => props.theme.cardColor};
		}
	}

	@media (max-width: 675px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;

		grid-template-areas:
			'info-container '
			'actions-container'
			'image-container ';
	}
`;
