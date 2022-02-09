import { render, screen } from '@testing-library/react';
import CartPage from '../CartPage';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();


import { BrowserRouter, Routes } from 'react-router-dom';

describe('CartPage Component', () => {
	it('should render', () => {
		render(
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<CartPage isLoggedIn={true} />
				</QueryClientProvider>
			</BrowserRouter>
		);
	});
});
