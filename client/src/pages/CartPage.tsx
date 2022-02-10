import CartModule from '../components/cart/CartModule';
import StyledPageContainer from '../styled-components/StyledPageContainer';

export default function CartPage({ isLoggedIn }: { isLoggedIn: boolean }) {

	return (

		<StyledPageContainer>
			{isLoggedIn && <CartModule isLoggedIn={isLoggedIn} />}
		</StyledPageContainer> 
	);
}
