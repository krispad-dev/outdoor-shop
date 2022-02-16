import { getByRole, render, screen } from '@testing-library/react';
import CartListItem from '../CartListItem';
import { mockCart } from './mockCart';

import { QueryClient, QueryClientProvider } from 'react-query';

describe('CartModule Component', () => {
	const queryClient = new QueryClient();

	it('should render', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<CartListItem {...mockCart[0]} />
			</QueryClientProvider>
		);
	});

	it('should render title, description, price, image and items(quantity) left in stock', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<CartListItem {...mockCart[0]} />
			</QueryClientProvider>
		);
		

		const title = screen.getByRole('heading', { name: /test tent 2/i })
		const price = screen.getByText((/1 595,00 kr/i))
		const leftInStock = screen.getByText(/20/i) 
		const image = screen.getByRole('img')

		expect(title).toBeInTheDocument()
		expect(price).toBeInTheDocument()
		expect(leftInStock).toBeInTheDocument()
		expect(image).toBeInTheDocument()



	});
});
