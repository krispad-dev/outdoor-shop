import { render, screen } from '@testing-library/react';
import CartItemCounter from '../CartItemCounter';
import { mockCart } from './mockCart'

describe('CartSetItemQuantity Component', () => {
	
	it('should render', () => {
		render(<CartItemCounter  />);
	});

	it('should render correct item amount', () => {
		render(<CartItemCounter  />);

		const itemCount = screen.getByText(/1/i)

		expect(itemCount).toBeInTheDocument()
	})
});
