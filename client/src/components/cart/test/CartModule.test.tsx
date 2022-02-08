import { render, screen } from '@testing-library/react';
import CartModule from '../CartModule';

describe('CartModule Component', () => {
	it('should render', () => {
		render(<CartModule/>)
	});

	it('should render cart items', () => {
		render(<CartModule/>)

		const listItems = screen.getAllByRole('listItem')
		expect(listItems).toHaveLength(3)
	});

	it('should render button "slutför köp"', () => {
		render(<CartModule/>)

		const button = screen.getByRole('button')
		expect(button).toBeInTheDocument()
	});


});
