import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import CartModule from '../CartModule';
import { mockCart } from './mockCart';
import { mockUser } from './mockUser';

import useGetCart from '../../../modules/cart/useGetCart';
jest.mock('../../../modules/cart/useGetCart');
const useGetCartMock = useGetCart as jest.Mock<any>;

import useAuth from '../../../modules/auth/useAuth';
jest.mock('../../../modules/auth/useAuth');
const useAuthMock = useAuth as jest.Mock<any>;

import usePlaceOrder from '../../../modules/order/usePlaceOrder';
jest.mock('../../../modules/order/usePlaceOrder')
const usePlaceOrderMock = usePlaceOrder as jest.Mock<any>;


import { QueryClient, QueryClientProvider } from 'react-query';
import userEvent from '@testing-library/user-event';

const queryClient = new QueryClient();

describe('CartModule Component', () => {

	const orderProductsMutateMock = jest.fn()

	beforeEach(() => {
		useGetCartMock.mockImplementation(() => ({
			data: { data: mockCart },
			success: false,
		}));

		useAuthMock.mockImplementation(() => ({
			data: { user: mockUser },
			loggeIn: false,
		}));

		usePlaceOrderMock.mockImplementation(() => ({
			mutate: orderProductsMutateMock,
			success: true,
		}));
	});

	it('should render', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<CartModule isLoggedIn={true} />
			</QueryClientProvider>
		);
	});

	it('should render cart items', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<CartModule isLoggedIn={true} />
			</QueryClientProvider>
		);

		const listItems = screen.getAllByRole('listitem');
		expect(listItems).toHaveLength(2);
	});

	describe('"varukorg" section', () => {
		it(`should render the correct price calculating total of the products in cart. 
		This taking in to account both different products in cart and their item count. `, () => {
			render(
				<QueryClientProvider client={queryClient}>
					<CartModule isLoggedIn={true} />
				</QueryClientProvider>
			);

			const part  = screen.getByRole('heading', { name: /total/i });
			const exclVat = screen.getByText(/5 575,00 kr/i);
			const inclVat = screen.getByText(/6 969,00 kr/i);

			expect(part).toBeInTheDocument();
			expect(exclVat).toBeInTheDocument();
			expect(inclVat).toBeInTheDocument();

		});

		it('should render text "varukorg" (quantity cart items) ', () => {
			render(
				<QueryClientProvider client={queryClient}>
					<CartModule isLoggedIn={true} />
				</QueryClientProvider>
			);

			const cartHeader = screen.getByRole('heading', { name: /varukorg \(2 varor\)/i });
			expect(cartHeader).toBeInTheDocument();
		});
	});

	describe('"slutför köp" section', () => {
		it('should display: user delivery address information', () => {
			render(
				<QueryClientProvider client={queryClient}>
					<CartModule isLoggedIn={true} />
				</QueryClientProvider>
			);

			const deliveryHeader = screen.getByRole('heading', { name: /leveransuppgifter/i });

			const address = screen.getByText(/kalle ankagatan 1/i);
			const zipCode = screen.getByText(/44455/i);
			const city = screen.getByText(/fantasyland/i);
			const orderConfirmation = screen.getByText(/test@testsson.com/i);

			expect(address).toBeInTheDocument();
			expect(zipCode).toBeInTheDocument();
			expect(orderConfirmation).toBeInTheDocument();
			expect(city).toBeInTheDocument();
			expect(deliveryHeader).toBeInTheDocument();
		});

		it('should render button "slutför köp"', () => {
			render(
				<QueryClientProvider client={queryClient}>
					<CartModule isLoggedIn={true} />
				</QueryClientProvider>
			);

			const button = screen.getByRole('button', { name: /slutför köp/i });
			expect(button).toBeInTheDocument();
		});

		it('should call mutate one time on btnClick', () => {
			render(
				<QueryClientProvider client={queryClient}>
					<CartModule isLoggedIn={true} />
				</QueryClientProvider>
			);

			const button = screen.getByRole('button', { name: /slutför köp/i });
			userEvent.click(button)

			expect(orderProductsMutateMock).toHaveBeenCalledTimes(1);
		});
	});
});
