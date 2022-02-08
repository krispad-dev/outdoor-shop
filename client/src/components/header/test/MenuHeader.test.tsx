import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MenuHeader from '../MenuHeader';
import { mockCart } from './mockCart';
import { UiStateContext } from '../../../context/UiStateContext';

import { BrowserRouter } from 'react-router-dom';

import { useReducer } from 'react';
import { UiReducer } from '../../../context/UiReducer';

import useGetCart from '../../../modules/cart/useGetCart';
jest.mock('../../../modules/cart/useGetCart');
const useGetCartMock = useGetCart as jest.Mock<any>;

import useAuth from '../../../modules/auth/useAuth';
jest.mock('../../../modules/auth/useAuth');
const useAuthMock = useAuth as jest.Mock<any>;

describe('Menu Component', () => {
	function ComponentWrappedInContext() {
		const initialState = {
			headerMenuIsOpen: false,
			userAuthState: { success: false, data: {} },
		};

		const [state, dispatch] = useReducer(UiReducer, initialState);

		return (
			<UiStateContext.Provider value={{ state, dispatch }}>
				<BrowserRouter>
					<MenuHeader />
				</BrowserRouter>
			</UiStateContext.Provider>
		);
	}

	useGetCartMock.mockReturnValue({
		data: { data: [mockCart] },
		success: false,
	});

	useAuthMock.mockReturnValue({
		data: { isLoggedIn: true },
	});

	it('should render', () => {
		render(<ComponentWrappedInContext />);
	});

	it('should have "menu" and "cart button" ', () => {
		render(<ComponentWrappedInContext />);

		const menuBtn = screen.getByRole('button', { name: /meny/i });
		const cartBtn = screen.getByRole('button', { name: /cart/i });

		expect(menuBtn).toBeInTheDocument();
		expect(cartBtn).toBeInTheDocument();
	});

	it('should present menu options when user clicks on "menu" ', () => {
		render(<ComponentWrappedInContext />);

		const menuBtn = screen.getByRole('button', { name: /meny/i });
		userEvent.click(menuBtn);

		const menuOption = screen.getByRole('button', { name: /login/i });
		expect(menuOption).toBeInTheDocument();
	});

	it('cart items quantity should be the accurate amount ', () => {
		render(<ComponentWrappedInContext />);

		const cartQuantity = screen.getByTestId('cart-quantity');
		expect(cartQuantity).toHaveTextContent('1');
	});

	it('link to cart page should be present ', () => {
		render(<ComponentWrappedInContext />);

		const menuBtn = screen.getByRole('button', { name: /meny/i });
		userEvent.click(menuBtn);

		const link = screen.getByRole('link');
		expect(link).toBeInTheDocument();
	});
});
