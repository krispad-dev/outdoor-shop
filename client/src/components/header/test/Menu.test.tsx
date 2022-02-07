import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Menu from '../MenuHeader';
import { mockCart } from './mockCart';

import useGetCart from '../../../modules/cart/useGetCart';
jest.mock('../../../modules/cart/useGetCart');

const useGetCartMock = useGetCart as jest.Mock<any>;

describe('Menu Component', () => {


	beforeEach(() => {
		useGetCartMock.mockReturnValue({
			data: { data: [mockCart] },
			success: false,
		});
	});



	it('should render', () => {
		render(<Menu />);
	});

	it('should have "menu" and "cart button" ', () => {
		render(<Menu />);

        const menuBtn = screen.getByRole('button', { name: /menu/i })
        const cartBtn = screen.getByRole('button', { name: /cart/i })

        expect(menuBtn).toBeInTheDocument()
        expect(cartBtn).toBeInTheDocument()


	});
	it('should present menu options when user clicks on "menu" ', () => {
		render(<Menu />);

        const menuBtn = screen.getByRole('button', { name: /menu/i })
        userEvent.click(menuBtn)

        const menuOption = screen.getByRole('button', { name: /login | logout/i })
        expect(menuOption).toBeInTheDocument()        


	});
	it('cart items quantity should be the accurate amount ', () => {
		render(<Menu />);

        const cartQuantity = screen.getByTestId('cart-quantity')
        expect(cartQuantity).toHaveTextContent('1')

        
	});
	it('link to cart page should be present ', () => {
		render(<Menu />);
        const link = screen.getByRole('link')
        
	});

    
});
