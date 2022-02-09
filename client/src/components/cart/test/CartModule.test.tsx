import { render, screen } from '@testing-library/react';
import CartModule from '../CartModule';
import { mockCart } from './mockCart';

import useGetCart from '../../../modules/cart/useGetCart'
jest.mock('../../../modules/cart/useGetCart');
const useGetCartMock = useGetCart as jest.Mock<any>;


describe('CartModule Component', () => {

	useGetCartMock.mockReturnValue({
		data: { data: [mockCart] },
		success: false,
	});

	
	it('should render', () => {
		render(<CartModule isLoggedIn={true} />)
	});

	it('should render cart items', () => {
		render(<CartModule isLoggedIn={true} />)

		const listItems = screen.getAllByRole('listitem')
		expect(listItems).toHaveLength(1)
	});

	it('should render button "slutför köp"', () => {
		render(<CartModule isLoggedIn={true} />)

		const button = screen.getByRole('button')
		expect(button).toBeInTheDocument()
	});


});
