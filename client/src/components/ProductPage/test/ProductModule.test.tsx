import { render, screen } from '@testing-library/react';
import { mockData } from '../../MainProductsPage/test/MockData';
import ProductModule from '../PrductModule';
import userEvent from '@testing-library/user-event';

// Mock my hook
import useGetProduct from '../../../modules/products/useGetProduct';
jest.mock('../../../modules/products/useGetProduct');
const useGetProductMock = useGetProduct as jest.Mock<any>;



describe('ProductModule component', () => {

	useGetProductMock.mockReturnValue({ data: { data: [mockData] }, success: true });

	it('should render', () => {
		render(<ProductModule />);
	});

	it('should contain add to cart button', () => {
		render(<ProductModule />);

		const button = screen.getByRole('button', { name: /lägg i cart/i})

		expect(button).toBeInTheDocument()

	});

	it('should inform me when product is added ', () => {
		render(<ProductModule />);

		const button = screen.getByRole('button', { name: /lägg i cart/i})
		userEvent.click(button)

		expect(button).toHaveTextContent(/produkt tillagd/i)

	});

	it('should render correct product', () => {
		render(<ProductModule />);


		const heading = screen.getByRole('heading', { name: /test name/ })

		expect(heading).toBeInTheDocument()

	});

});

