import { render, screen } from '@testing-library/react';
import ProductList from '../ProductList';
import { mockData } from './MockData';

// Mock my hook
import useGetProducts from '../../../modules/products/useGetProducts';
jest.mock('../../../modules/products/useGetProducts')
const useGetProductsMock = useGetProducts as jest.Mock<any>;


describe('ProductList component', () => {

	// mock my return value 
	useGetProductsMock.mockReturnValue({ data: {data: [mockData]}, success: true });

	it('should render', () => {
		render(<ProductList />);
	});

	it('should show one product listed', () => {
		render(<ProductList />);

		const productListItem = screen.getByRole('listitem')
		expect(productListItem).toHaveTextContent(/test product/i)

	});

});
