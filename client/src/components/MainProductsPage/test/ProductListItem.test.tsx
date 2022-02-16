import { render, screen } from '@testing-library/react';
import ProductListItem from '../ProductListItem';
import { mockData } from './MockData';
import { BrowserRouter } from 'react-router-dom';

describe('ProductListItem', () => {
	it('should render', () => {
		render(
			<BrowserRouter>
				<ProductListItem {...mockData} />
			</BrowserRouter>
		);
	});

	it('should contain product title, category, description, price and a background image', () => {
		render(
			<BrowserRouter>
				<ProductListItem {...mockData} />
			</BrowserRouter>
		);

		const title = screen.getByRole('heading', { name: /test name/i });
		const category = screen.getByRole('heading', { name: /test category/i });
		const description = screen.getByText(/test description/i);
		const price = screen.getByText(/test name/i);
		const image = screen.getByRole('image');

		expect(title).toBeInTheDocument();
		expect(category).toBeInTheDocument();
		expect(description).toBeInTheDocument();
		expect(price).toBeInTheDocument();
		expect(image).toBeInTheDocument();
	});

	it('should contain Link', () => {
		render(
			<BrowserRouter>
				<ProductListItem {...mockData} />
			</BrowserRouter>
		);
		expect(screen.getByRole('link')).toHaveAttribute('href', '/1');
	});
});
