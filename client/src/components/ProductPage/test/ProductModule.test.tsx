import { render, screen } from '@testing-library/react';
import { mockData } from '../../MainProductsPage/test/MockData';
import ProductModule from '../ProductModule';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';
// Mock my hook
import useGetProduct from '../../../modules/products/useGetProduct';
jest.mock('../../../modules/products/useGetProduct');
const useGetProductMock = useGetProduct as jest.Mock<any>;

import useAddToCart from '../../../modules/cart/useAddToCart';
jest.mock('../../../modules/cart/useAddToCart');
const useAddToCartMock = useAddToCart as jest.Mock<any>;

import useGetCart from '../../../modules/cart/useGetCart';
import { mockCart } from './MockData';
jest.mock('../../../modules/cart/useGetCart');
const useGetCartMock = useGetCart as jest.Mock<any>;

const queryClient = new QueryClient();

describe('ProductModule component', () => {

	useGetProductMock.mockImplementation(() => ({ 
		data: { data: mockData }, success: true 
	}));

	useAddToCartMock.mockImplementation(() => ({
		mutate: jest.fn(),
		data: { data: mockData },
		success: true,
	}));

	useGetCartMock.mockImplementation(() => ({ 
		data: { data: mockCart }, success: true 
	
	}));

	it('should render', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ProductModule id={'1'} isLoggedIn={true} />
			</QueryClientProvider>
		);
	});

	it('should contain add to cart button', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ProductModule id={'2'} isLoggedIn={true} />
			</QueryClientProvider>
		);

		const button = screen.getByRole('button', { name: /lägg i cart/i });

		expect(button).toBeInTheDocument();
	});

	it('should inform me the product is added ', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ProductModule id={'1'} isLoggedIn={true} />
			</QueryClientProvider>
		);

		const button = screen.getByRole('button', { name: /finns i cart/i });

		expect(button).toHaveTextContent(/finns i cart/i);
	});

	it('should have disabled cart button when product is in cart', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<ProductModule id={'1'} isLoggedIn={true} />
			</QueryClientProvider>
		);

		const button = screen.getByRole('button', { name: /finns i cart/i });

		expect(button).toBeDisabled();
	});
});
