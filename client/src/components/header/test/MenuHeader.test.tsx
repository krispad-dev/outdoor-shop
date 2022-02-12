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

import useLogoutUser from '../../../modules/auth/useLogoutUser';
jest.mock('../../../modules/auth/useLogoutUser');
const useLogoutUserMock = useLogoutUser as jest.Mock<any>;

describe('Menu Component', () => {
	function ComponentWrappedInContext() {
		const initialState = {
			headerMenuIsOpen: false,
			userAuthState: { success: false, data: {} },
			searchString: '',
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

	const testMutate = jest.fn();

	useGetCartMock.mockImplementation(() => ({
		data: { data: [mockCart] },
		success: false,
	}));

	useAuthMock.mockImplementation(() => ({
		data: { loggedIn: true },
	}));

	useLogoutUserMock.mockImplementation(() => ({
		mutate: testMutate,
		data: { success: true },
	}));

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

		const logoutButton = screen.getByRole('button', { name: /logout/i });
		expect(logoutButton).toBeInTheDocument();
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

		const link = screen.getAllByRole('link');
		expect(link[0]).toHaveAttribute('href', '/cart');
	});

	it('link to login page should be present ', () => {
		useAuthMock.mockImplementation(() => ({
			data: { loggedIn: false },
		}));

		render(<ComponentWrappedInContext />);

		const menuBtn = screen.getByRole('button', { name: /meny/i });
		userEvent.click(menuBtn);

		const link = screen.getAllByRole('link');
		expect(link[0]).toHaveAttribute('href', '/login');
	});

	describe('logout', () => {
		it('should call logout when user clicks logout', () => {
			useAuthMock.mockImplementation(() => ({
				data: { loggedIn: true },
			}));

			render(<ComponentWrappedInContext />);
			const menuBtn = screen.getByRole('button', { name: /meny/i });
			userEvent.click(menuBtn);

			const logoutButton = screen.getByRole('button', { name: /logout/i });
			userEvent.click(logoutButton);

			expect(testMutate).toHaveBeenCalledTimes(1);
		});
	});
});
