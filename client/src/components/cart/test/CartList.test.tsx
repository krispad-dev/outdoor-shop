import { render } from '@testing-library/react';
import CartItemList from '../CartItemList';
import { mockCart } from './mockCart'

describe('CartModule Component', () => {
	it('should render', () => {
		render(<CartItemList cartItems={[mockCart]} />);
	});
});
