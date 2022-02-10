import { render, screen } from '@testing-library/react';
import CartItemCounter from '../CartItemCounter';
import { mockCart } from './mockCart'

describe('CartSetItemQuantity Component', () => {
	
	it('should render', () => {
		render(<CartItemCounter cart_item_id={1} item_count={20} />);
	});

	it('should render correct item amount', () => {
		render(<CartItemCounter cart_item_id={1} item_count={20} />);

		const itemCount = screen.getByText(/1/i)

		expect(itemCount).toBeInTheDocument()
	})
});
