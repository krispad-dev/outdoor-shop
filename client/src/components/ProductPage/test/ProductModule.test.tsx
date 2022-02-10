import { render, screen } from '@testing-library/react';
import { mockData } from '../../MainProductsPage/test/MockData';
import ProductModule from '../ProductModule';
import userEvent from '@testing-library/user-event';

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



describe('ProductModule component', () => {

	useGetProductMock.mockReturnValue({ data: { data: mockData }, success: true });
	useAddToCartMock.mockReturnValue({ mutate: jest.fn(), data: { data: mockData }, success: true });

	useGetCartMock.mockReturnValue({ data: { data: [mockCart] }, success: true });

	it('should render', () => {
		render(<ProductModule id={'1'}  isLoggedIn={true} />);
	});

	it('should contain add to cart button', () => {
		render(<ProductModule id={'5'}  isLoggedIn={true} />);

		const button = screen.getByRole('button', { name: /lägg i cart/i})

		expect(button).toBeInTheDocument()

	});

 	it('should inform me the product is added ', () => {
		render(<ProductModule id={'1'}  isLoggedIn={true} />);

		const button = screen.getByRole('button', { name: /finns i cart/i})

		expect(button).toHaveTextContent(/finns i cart/i)

	});

	it('should have disabled cart button when product is in cart', () => {
		render(<ProductModule id={'1'}  isLoggedIn={true} />);

		const button = screen.getByRole('button', { name:  /finns i cart/i})

		expect(button).toBeDisabled()

	}); 

});

