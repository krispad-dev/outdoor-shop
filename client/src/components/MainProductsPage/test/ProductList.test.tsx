import { render, screen } from '@testing-library/react';
import ProductList from '../ProductList';
import { mockData } from './MockData';

import { BrowserRouter } from 'react-router-dom';

// Mock my hook
import useGetProducts from '../../../modules/products/useGetProducts';
jest.mock('../../../modules/products/useGetProducts');
const useGetProductsMock = useGetProducts as jest.Mock<any>;

describe('ProductList component', () => {
	// mock my return value
	useGetProductsMock.mockImplementation(() => ({ data: { data: [mockData] }, success: true }));

	it('should render', () => {
		render(
			<BrowserRouter>
				<ProductList />
			</BrowserRouter>
		);
	});

	it('should show one product listed', () => {
		render(
			<BrowserRouter>
				<ProductList />
			</BrowserRouter>
		);

		const productListItem = screen.getByRole('listitem');
		expect(productListItem).toHaveTextContent(/test/i);
	});
});
